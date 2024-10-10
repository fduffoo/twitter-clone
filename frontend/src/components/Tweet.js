import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <div>
      <h4>{tweet.user.username}</h4>
      <p>{tweet.content}</p>
    </div>
  );
};

export default Tweet;
