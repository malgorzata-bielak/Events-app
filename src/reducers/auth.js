const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUESTED":
      return {
        uid: action.uid,
      };
    case "LOGOUT_REQUESTED":
      return {};
    default:
      return state;
  }
};

export default authReducer;
