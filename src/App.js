import React, { useState, Suspense } from 'react';
import UsernameInput from './components/username-input';
import User from './components/user';
import Repos from './components/repos';
import Orgs from './components/orgs';
import UserLoader from './components/loaders/user-loader';
import ReposLoader from './components/loaders/repos-loader';

import {
  eFetchUser,
  eFetchUserRepos,
  eFetchUserOrgs
} from './services/suspense-api';

function App() {
  const [username, setUsername] = useState("sokra");
  const userResource = eFetchUser(username, 3);
  const reposResource = eFetchUserRepos(username, 2);
  const orgsResource = eFetchUserOrgs(username, 4);

  return (
    <>
      <UsernameInput
        initialUsername={username}
        onUsernameChange={(username) => setUsername(username)}
      />
      {/* Load user profile only when username exists */}
      {username?
        <Suspense fallback={<UserLoader />}>
          <User resource={userResource}>
            <Suspense fallback={"Loading..."}>
              <Orgs resource={orgsResource} />
            </Suspense>
          </User>
        </Suspense>
      : null}
      {/* Load user repos only when username exists */}
      {username?
        <Suspense fallback={<ReposLoader />}>
          <Repos resource={reposResource} />
        </Suspense>
      : null}
    </>
  );
}

export default App;
