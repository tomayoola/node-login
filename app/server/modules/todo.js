/**
 * Created by irinapopi on 01/11/2017.
 */

var mongoose = require ('mongoose');
module.exports = mongoose.model('Todo', {
    text : String,
    tags : [String],
    user: String,
    date_created: Date,
    done : Boolean
});
