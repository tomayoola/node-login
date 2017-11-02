const {Builder, By, until} = require('selenium-webdriver');

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://uclteam17.azurewebsites.net/');
//driver.manage().window().maximize();   /// maximize the page



var expectedTitle = "Node.js Login";
var actualTitle = driver.getTitle();


//checks if the title is correct
driver.getTitle().then(function(title) {

    if(expectedTitle === title){
        console.log("Verification Successful - The correct title is displayed on the web page.");

    }
    else{
        console.log("Verification Failed - An incorrect title is displayed on the web page.");

    }
});




//forgot password + popup testig

/*
driver.findElement({xpath: '//*[@id="forgot-password"]/a'}).click();
driver.findElement({xpath: '//*[@id="forgot-password"]/a'}).click().then(function() {
    driver.sleep(5000);
});
driver.findElement(webdriver.By.name('email')).sendKeys('carmenn@gmail.com').then(function() {
    driver.sleep(5000);
});
driver.findElement(webdriver.By.name('email')).sendKeys('carmenn@gmail.com');
driver.findElement({xpath: '//*[@id="cancel"]'}).click();*/



//sign up page --- takes a bit of time untilthe "x" button is clicked





/*driver.findElement({xpath: '//*[@id="create-account"]/a'}).click();
setTimeout(function() {
    // Whatever you want to do after the wait

driver.findElement(webdriver.By.name('name')).sendKeys('carmenn');
driver.findElement(webdriver.By.name('email')).sendKeys('carmenn@gmail.com');
driver.findElement(webdriver.By.name('country')).sendKeys('Romania');
driver.findElement(webdriver.By.name('user')).sendKeys('carmeen');
driver.findElement(webdriver.By.name('pass')).sendKeys('123456');
driver.findElement(webdriver.By.className('btn btn-primary')).click();

//driver.findElement(webdriver.By.className('close')).click();
setTimeout(function() {
    // Whatever you want to do after the wait
    driver.findElement(webdriver.By.className('close')).click();

}, 5000);


}, 5000);
*/


//first page login
/*


driver.findElement(webdriver.By.name('user')).sendKeys('carmenn');
driver.findElement(webdriver.By.name('pass')).sendKeys('123456');
driver.findElement(webdriver.By.className('glyphicon glyphicon-lock')).click();*/


//go to todo page - sometimes it works, sometimes it does not. it is a problem with the time it takes to load the elements




/*
setTimeout(function() {
    // Whatever you want to do after the wait

driver.findElement({xpath: '//*[@id="todo-form"]/div/form/div/input[1]'}).sendKeys('abca');
driver.findElement({xpath: '//*[@id="todo-form"]/div/form/div/input[2]'}).sendKeys('yes');
driver.findElement({xpath: '//*[@id="todo-form"]/div/form/button'}).click();
console.log("Successful : Added eleement in the todo list");



}, 5000);
*/


//remember me feature

/*driver.findElement(webdriver.By.name('user')).sendKeys('carmenn');
driver.findElement(webdriver.By.name('pass')).sendKeys('123456');
driver.findElement(webdriver.By.className('btn btn-default button-rememember-me')).click();

setTimeout(function() {
driver.findElement(webdriver.By.className('glyphicon glyphicon-lock')).click();

setTimeout(function() {
driver.findElement({xpath: '//*[@id="sign-out"]'}).click();
}, 5000);
}, 5000); */
