function fetchUser(username, delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        fetch(`/users/${username}.json`)
          .then(async res => resolve(await res.json()))
          .catch(err => reject(err)),
      delay * 1000
    );
  });
}

function fetchUserRepos(username, delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        fetch(`/repos/${username}.json`)
          .then(async res => resolve(await res.json()))
          .catch(err => reject(err)),
      delay * 1000
    );
  });
}

function fetchUserOrgs(username, delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        fetch(`/orgs/${username}.json`)
          .then(async res => resolve(await res.json()))
          .catch(err => reject(err)),
      delay * 1000
    );
  });
}

export { fetchUser, fetchUserRepos, fetchUserOrgs };
