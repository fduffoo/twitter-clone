import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateTweet from '../components/CreateTweet';
import TweetList from '../components/TweetList';

const HomePage = () => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tweets');
      setTweets(res.data);
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <CreateTweet fetchTweets={fetchTweets} />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default HomePage;
