const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let LogSchema = new Schema({
    log: {
        type: String,
        minLength: 5,
        maxLength: 255,
        required: true
    }
});

exports.Log = mongoose.model('Log', LogSchema);
exports.LogSchema = LogSchema;