const StateReducer = (state, action) => {
  console.info(`Dispatch Action ${action.type}`, action);

  switch (action.type) {
    case "openAddEntryPanel":
      return {
        ...state,
        addEntry: {
          panelIsOpen: true
        }
      };
    case "closeAddEntryPanel":
      return {
        ...state,
        addEntry: {
          panelIsOpen: false
        }
      };
    case "addEntry":
      const { entries } = state;
      entries.push(action.payload);
      return {
        ...state,
        addEntry: {
          panelIsOpen: false
        },
        entries
      };
    case "removeEntry":
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
