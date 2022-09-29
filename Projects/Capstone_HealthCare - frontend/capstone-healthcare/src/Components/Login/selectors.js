import { createSelector } from "reselect";

function getUserData(state) {
  return {
    token: state.user.token,
    loading: state.user.loading,
    isAdmin: state.user.isAdmin,
    id: state.user.id,
  };
}

export const getCachedUserData = createSelector(
  getUserData,
  function getUser(user) {
    return user;
  }
);
