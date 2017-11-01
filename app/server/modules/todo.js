/**
 * Created by irinapopi on 01/11/2017.
 */

var mongoose = require ('mongoose');
module.exports = mongoose.model('Todo', {
    text : String,
    user: String,
    done : Boolean
});
