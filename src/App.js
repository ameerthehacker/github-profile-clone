import React, { useState } from 'react';
import UsernameInput from './components/username-input';
import User from './components/user';
import Repos from './components/repos';
import Orgs from './components/orgs';

function App() {
  const [username, setUsername] = useState("sokra");

  return (
    <>
      <UsernameInput
        initialUsername={username}
        onUsernameChange={(username) => setUsername(username)}
      />
      {/* Load user profile only when username exists */}
      {username?
        <User username={username} delay={3}>
          <Orgs username={username} delay={5}/>
        </User>
      : null}
      {/* Load user repos only when username exists */}
      {username?
          <Repos username={username} delay={1}/>
      : null}
    </>
  );
}

export default App;
