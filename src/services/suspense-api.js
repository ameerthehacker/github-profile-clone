import { 
  fetchUser, 
  fetchUserOrgs, 
  fetchUserRepos 
} from './api';

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

function eFetchUser(username, delay) {
  return wrapPromise(
    fetchUser(username, delay)
  );
}

function eFetchUserRepos(username, delay) {
  return wrapPromise(
    fetchUserRepos(username, delay)
  );
}

function eFetchUserOrgs(username, delay) {
  return wrapPromise(
    fetchUserOrgs(username, delay)
  );
}

export {
  eFetchUser,
  eFetchUserRepos,
  eFetchUserOrgs
}
