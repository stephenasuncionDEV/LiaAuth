const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    name: {
        type: String,
        minLength: 1,
        maxLength: 30,
        required: true
    },
    dateCreated: Date,
    licenses: [{ 
        type: Schema.Types.ObjectId,
        ref: 'License' 
    }]
});

exports.Project = mongoose.model('Project', ProjectSchema);