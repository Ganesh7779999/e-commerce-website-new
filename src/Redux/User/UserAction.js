//actions are also functions and return objects
export const setCurrentUser = (user) => ({
  // setCurrentUser is the action and it will take the user object
  type: "SET_CURRENT_USER",
  payload: user,
});
