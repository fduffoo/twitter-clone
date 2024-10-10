import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register with:', username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
