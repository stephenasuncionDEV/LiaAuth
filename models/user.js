const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        minLength: 1,
        maxLength: 30,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    projects: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Project' 
    }]
});

exports.User = mongoose.model('User', UserSchema);