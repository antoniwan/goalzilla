const StateReducer = (state, action) => {
  switch (action.type) {
    case "openAddEntryPanel":
      console.info(`Open Add Entry Panel`, action);
      return {
        ...state,
        addEntryPanel: {
          isOpen: true
        }
      };
    case "closeAddEntryPanel":
      console.info(`Close Add Entry Panel`, action);
      return {
        ...state,
        addEntryPanel: {
          isOpen: false
        }
      };
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
