import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TweetComponent from './TweetComponent';

describe('TweetComponent', () => {
  const mockTweet = {
    id: '1',
    text: 'This is a test tweet',
    user: {
      username: 'testuser',
    },
    likes: 5,
  };

  test('renders TweetComponent with tweet text and username', () => {
    render(<TweetComponent tweet={mockTweet} />);

    // Check if tweet text and username are displayed
    expect(screen.getByText(mockTweet.text)).toBeInTheDocument();
    expect(screen.getByText(mockTweet.user.username)).toBeInTheDocument();
  });

  test('displays like count and "Like" button', () => {
    render(<TweetComponent tweet={mockTweet} />);

    const likeButton = screen.getByRole('button', { name: /Like/i });
    expect(likeButton).toBeInTheDocument();
    
    // Check like count
    expect(screen.getByText(`Likes: ${mockTweet.likes}`)).toBeInTheDocument();
  });

  test('increments like count when "Like" button is clicked', () => {
    const handleLike = jest.fn();

    render(<TweetComponent tweet={mockTweet} onLike={handleLike} />);

    const likeButton = screen.getByRole('button', { name: /Like/i });
    fireEvent.click(likeButton);

    // Check if the like function is called
    expect(handleLike).toHaveBeenCalledTimes(1);
  });
});
