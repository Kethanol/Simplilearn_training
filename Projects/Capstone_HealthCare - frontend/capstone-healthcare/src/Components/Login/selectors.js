import { createSelector } from "reselect";

function getUserData(state) {
  return {
    token: state.user.token,
    loading: state.user.loading,
    isAdmin: state.user.isAdmin,
    userId: state.user.userId,
  };
}

export const getCachedUserData = createSelector(
  getUserData,
  function getUser(user) {
    return user;
  }
);
