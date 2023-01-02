const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        currentUser: action.payload
      };
    }

    case "LOGOUT": {
      return {
        currentUser: null
      };
    }

    default: {
      // unknown type! based on the syntax
    }
  }
};

export default AuthReducer;
