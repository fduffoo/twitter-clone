const Tweet = require('../models/Tweet');

// Get all tweets
const getTweets = async (req, res) => {
    const tweets = await Tweet.find().populate('user', 'username').sort({ createdAt: -1 });
    res.json(tweets);
};

// Create a tweet
const createTweet = async (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: 'Tweet content is required' });
    }

    const tweet = new Tweet({
        content,
        user: req.user._id,
    });

    const createdTweet = await tweet.save();
    res.status(201).json(createdTweet);
};

module.exports = { getTweets, createTweet };
