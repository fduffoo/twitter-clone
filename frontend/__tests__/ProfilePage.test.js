import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfilePage from './ProfilePage';

describe('ProfilePage Component', () => {
  const mockUser = {
    username: 'testuser',
    bio: 'This is a test bio',
    followersCount: 120,
    followingCount: 80,
  };

  test('renders ProfilePage component with user info', () => {
    render(<ProfilePage user={mockUser} />);

    // Check if username is displayed
    expect(screen.getByText(mockUser.username)).toBeInTheDocument();
    
    // Check if bio is displayed
    expect(screen.getByText(mockUser.bio)).toBeInTheDocument();
    
    // Check followers and following counts
    expect(screen.getByText(`Followers: ${mockUser.followersCount}`)).toBeInTheDocument();
    expect(screen.getByText(`Following: ${mockUser.followingCount}`)).toBeInTheDocument();
  });

  test('renders "Follow" button if not following user', () => {
    render(<ProfilePage user={mockUser} isFollowing={false} />);

    const followButton = screen.getByRole('button', { name: /Follow/i });
    expect(followButton).toBeInTheDocument();
  });

  test('renders "Unfollow" button if following user', () => {
    render(<ProfilePage user={mockUser} isFollowing={true} />);

    const unfollowButton = screen.getByRole('button', { name: /Unfollow/i });
    expect(unfollowButton).toBeInTheDocument();
  });
});
