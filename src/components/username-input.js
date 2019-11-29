import React, { useState } from 'react';

export default function UsernameInput({ 
  initialUsername, onUsernameChange 
}) {
  const [username, setUsername] = useState(initialUsername);

  return (
    <>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <button 
        onClick={() => onUsernameChange(username)}
      >
        Fetch
      </button>
    </>
  );
}