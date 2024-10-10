const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
