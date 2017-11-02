/**
 * Created by irinapopi on 01/11/2017.
 */

$('#btn-logout').click(function(){
    console.log("string");
    that.attemptLogout();
    });


    // bind event listeners to button clicks //
    var that = this;

// handle user logout //
    /*$('#btn-logout').click(function(){
        console.log("string");
        that.attemptLogout(); });*/

    this.attemptLogout = function()
    {
        var that = this;
        $.ajax({
            url: "/logout",
            type: "POST",
            data: {logout : true},
            success: function(data){
                that.showLockedAlert('You are now logged out.<br>Redirecting you back to the homepage.');
            },
            error: function(jqXHR){
                console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
            }
        });
    }

    this.showLockedAlert = function(msg){
        $('.modal-alert').modal({ show : false, keyboard : false, backdrop : 'static' });
        $('.modal-alert .modal-header h4').text('Success!');
        $('.modal-alert .modal-body p').html(msg);
        $('.modal-alert').modal('show');
        $('.modal-alert button').click(function(){window.location.href = '/';})
        setTimeout(function(){window.location.href = '/';}, 3000);
    }


var bogoTodo = angular.module('bogoTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.update = "";

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function(data) {
          if ($scope.formData.filterTags) {
            $scope.todos = filterByTags(data);
          } else {
            $scope.todos = data;
          }
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
      if (!$scope.formData.text) {
        return false;
      }
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData.text = ""; // clear the form so our user is ready to enter another
                $scope.formData.tags = "";
                if ($scope.formData.filterTags) {
                  $scope.todos = filterByTags(data);
                } else {
                  $scope.todos = data;
                }
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
              if ($scope.formData.filterTags) {
                $scope.todos = filterByTags(data);
              } else {
                $scope.todos = data;
              }
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.$watch('formData.filterTags',function(){
      console.log("changed");
      $http.get('/api/todos')
          .success(function(data) {
            if ($scope.formData.filterTags) {
              $scope.todos = filterByTags(data);
            } else {
              $scope.todos = data;
            }
              console.log(data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });
    });

    function filterByTags(data) {
        let tags = $scope.formData.filterTags.trim().split(',').filter(e => e !== '');
        let result = data.filter(function(item) {
          for (tag of tags) {
            if (item.tags.indexOf(tag) !== -1) {
              return 1;
            }
          }
          return 0;
      });
      return result;
  }

}
