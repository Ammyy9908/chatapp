const intialState = {
  user: null,
};

function AppReducer(state = intialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default AppReducer;