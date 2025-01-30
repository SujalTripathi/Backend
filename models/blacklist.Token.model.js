const mongoose = require('mongoose');

//create a schema for the blacklist jwt tokens and have ttl of 24 hours
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400,
    },
});

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);