import React, { useState } from 'react';
import GitHubUser from './components/github-user';
import UsernameInput from './components/username-input';
import GitHubUserRepos from './components/github-user-repos';
import GitHubUserOrgs from './components/github-user-orgs';

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
        <GitHubUser username={username} delay={0}>
          <GitHubUserOrgs username={username} delay={0}/>
        </GitHubUser>
      : null}
      {/* Load user repos only when username exists */}
      {username?
          <GitHubUserRepos username={username} delay={0}/>
      : null}
    </>
  );
}

export default App;
