const express = require('express');
const { getTweets, createTweet } = require('../controllers/tweetController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getTweets).post(protect, createTweet);
router.route('/:id').get(getTweetById).put(protect, updateTweet).delete(protect, deleteTweet);
router.route('/:id/like').post(protect, likeTweet);
router.route('/:id/retweet').post(protect, retweet);
router.route('/:id/comment').post(protect, addComment);

module.exports = router;
