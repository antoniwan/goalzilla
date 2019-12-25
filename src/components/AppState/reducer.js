const StateReducer = (state, action) => {
  switch (action.type) {
    case "addGoal":
      return {
        ...state
      };
    case "removeGoal":
      return {
        ...state
      };
    case "reset":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default StateReducer;
