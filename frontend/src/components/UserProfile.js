import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user ? user.username : 'Guest'}</p>
    </div>
  );
};

export default UserProfile;
