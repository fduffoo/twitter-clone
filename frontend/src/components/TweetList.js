import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets }) => {
  return (
    <div>
      {tweets.length > 0 ? tweets.map((tweet) => (
        <Tweet key={tweet._id} tweet={tweet} />
      )) : <p>No tweets available.</p>}
    </div>
  );
};

export default TweetList;
