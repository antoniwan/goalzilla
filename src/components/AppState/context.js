import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext(null);

export const StateProvider = ({ reducer, initialState, children }) => {
  localStorage.setItem("AppState", JSON.stringify(initialState));
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

export const withAppState = Component => props => (
  <StateContext.Consumer>
    {state => <Component {...props} state={state} />}
  </StateContext.Consumer>
);

export default StateContext;
