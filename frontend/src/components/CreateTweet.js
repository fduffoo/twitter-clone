import React, { useState } from 'react';
import axios from 'axios';

const CreateTweet = ({ fetchTweets }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tweets', { content });
      setContent('');
      fetchTweets();
    } catch (error) {
      console.error('Failed to create tweet:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
        required
      />
      <button type="submit">Tweet</button>
    </form>
  );
};

export default CreateTweet;
