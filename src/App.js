import React, { useState, useEffect } from 'react';
import UsernameInput from './components/username-input';
import User from './components/user';
import Repos from './components/repos';
import Orgs from './components/orgs';
import Spinner from './components/loaders/spinner';
import { 
  fetchUser, 
  fetchUserRepos, 
  fetchUserOrgs } 
from './services/api';

function App() {
  const [username, setUsername] = useState();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [orgs, setOrgs] = useState(null);
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // fetch all resources in one go
    Promise.all([
      fetchUser(username, 2),
      fetchUserRepos(username, 3),
      fetchUserOrgs(username, 5)
    ]).then(([user, repos, orgs]) => {
      setUser(user);
      setRepos(repos);
      setOrgs(orgs);
      setIsReady(true);
    });

    // clear previous isReady
    setIsReady(false);
  }, [username]);

  return (
    <>
      <UsernameInput
        initialUsername={username}
        onUsernameChange={(username) => setUsername(username)}
      />
      {/* Load user profile only when username exists */}
      {username && isReady?
        <>
          <User user={user} delay={3}>
            <Orgs orgs={orgs} delay={5}/>
          </User>
          <Repos repos={repos} delay={1}/>
        </>
      : <Spinner marginTop={"10px"} />}
    </>
  );
}

export default App;
