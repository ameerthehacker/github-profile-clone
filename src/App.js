import React, { useState } from 'react';
import GitHubUser from './components/github-user';
import UsernameInput from './components/username-input';
import GitHubUserRepos from './components/github-user-repos';
import GitHubUserOrgs from './components/github-user-orgs';

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
        <GitHubUser username={username} delay={2}>
          <GitHubUserOrgs username={username} delay={3}/>
        </GitHubUser>
      : null}
      {/* Load user repos only when username exists */}
      {username?
          <GitHubUserRepos username={username} delay={1}/>
      : null}
    </>
  );
}

export default App;
