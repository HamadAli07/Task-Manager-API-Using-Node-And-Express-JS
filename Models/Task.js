const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        maxlength: [20,'Name cannot be more than 20 characters.'],
        trim:true,
        required: [true,'Name cannot be empty.']
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    writeConcern: {
       w: 'majority',
       j: true,
       wtimeout: 1000
    }
 })


module.exports = mongoose.model('Task', TaskSchema);
