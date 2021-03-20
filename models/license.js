const mongoose = require('mongoose');
const { LogSchema } = require("./log.js");

let Schema = mongoose.Schema;

let LicenseSchema = new Schema({
    license: {
        type: String,
        minLength: 36,
        maxLength: 36,
        required: true
    },
    isUsed: Boolean,
    usedBy: String,
    generatedBy: {
        type: String,
        required: true
    },
    dateCreated: Date,
    dateLastUse: Date,
    logs: [LogSchema]
});

exports.License = mongoose.model('License', LicenseSchema);