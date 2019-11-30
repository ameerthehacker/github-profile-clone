import React, { useState } from 'react';
import UsernameInput from './components/username-input';
import ErrorComponent from './components/error';
import Spinner from './components/loaders/spinner';
import User from './components/user';
import Repos from './components/repos';
import Orgs from './components/orgs';

function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <UsernameInput
        initialUsername={username}
        onUsernameChange={(username) => setUsername(username)}
      />
      {/* Load user profile only when username exists */}
      {username?
        <>
          <User username={username} >
            <Orgs username={username} />
          </User>
          <Repos username={username} />
        </>
      : null}
    </>
  );
}

export default App;
