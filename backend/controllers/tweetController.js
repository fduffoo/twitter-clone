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

// Get tweet by ID
const getTweetById = async (req, res) => {
    const { id } = req.params;
    const tweet = await Tweet.findById(id).populate('user', 'username');

    if (!tweet) {
        return res.status(404).json({ message: 'Tweet not found' });
    }

    res.json(tweet);
};

// Update a tweet
const updateTweet = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    const tweet = await Tweet.findById(id);

    if (!tweet) {
        return res.status(404).json({ message: 'Tweet not found' });
    }

    if (tweet.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Not authorized to update this tweet' });
    }

    tweet.content = content || tweet.content;
    const updatedTweet = await tweet.save();
    res.json(updatedTweet);
};

// Delete a tweet
const deleteTweet = async (req, res) => {
    const { id } = req.params;

    const tweet = await Tweet.findById(id);

    if (!tweet) {
        return res.status(404).json({ message: 'Tweet not found' });
    }

    if (tweet.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Not authorized to delete this tweet' });
    }

    await tweet.remove();
    res.json({ message: 'Tweet deleted successfully' });
};

// Like a tweet
const likeTweet = async (req, res) => {
    const { id } = req.params;

    const tweet = await Tweet.findById(id);

    if (!tweet) {
        return res.status(404).json({ message: 'Tweet not found' });
    }

    // Toggle like
    if (tweet.likes.includes(req.user._id)) {
        tweet.likes.pull(req.user._id); // Remove like
    } else {
        tweet.likes.push(req.user._id); // Add like
    }

    const updatedTweet = await tweet.save();
    res.json(updatedTweet);
};

// Retweet
const retweet = async (req, res) => {
    const { id } = req.params;

    const originalTweet = await Tweet.findById(id);

    if (!originalTweet) {
        return res.status(404).json({ message: 'Original tweet not found' });
    }

    const retweet = new Tweet({
        content: originalTweet.content,
        user: req.user._id,
        retweeted: true,
        originalTweet: originalTweet._id
    });

    const createdRetweet = await retweet.save();
    res.status(201).json(createdRetweet);
};

// Add a comment to a tweet
const addComment = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    const tweet = await Tweet.findById(id);

    if (!tweet) {
        return res.status(404).json({ message: 'Tweet not found' });
    }

    tweet.comments.push({
        content,
        user: req.user._id,
        createdAt: new Date()
    });

    const updatedTweet = await tweet.save();
    res.status(201).json(updatedTweet);
};

// Export all functions
module.exports = {
    getTweets,
    createTweet,
    getTweetById,
    updateTweet,
    deleteTweet,
    likeTweet,
    retweet,
    addComment,
};
