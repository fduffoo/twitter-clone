const express = require('express');
const { getTweets, createTweet } = require('../controllers/tweetController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getTweets).post(protect, createTweet);

module.exports = router;
