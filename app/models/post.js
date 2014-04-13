var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    heading    : String,
    body	   : String,
    writtenAt  : Date,
    updatedAt  : Date
});

// Kan inte göra length på undefined (om den är tom)
// PostSchema.path('heading').validate(function(heading) {
//     return heading.length;
// }, 'Heading cannot be blank');
 
mongoose.model('Post', PostSchema);

exports.model = mongoose.model('Post');