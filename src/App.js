import React from "react";
import AppRouter from "./components/AppRouter";
import StateProvider, {
  StateReducer,
  initialState
} from "./components/AppState";

function App() {
  const stateFromLocalStorage =
    JSON.parse(localStorage.getItem("AppState")) || initialState;
  return (
    <StateProvider initialState={stateFromLocalStorage} reducer={StateReducer}>
      <AppRouter />
    </StateProvider>
  );
}

export default App;
