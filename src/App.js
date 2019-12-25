import React from "react";
import AppRouter from "./components/AppRouter";
import {
  StateProvider,
  StateReducer,
  initialState
} from "./components/AppState";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={StateReducer}>
      <AppRouter />
    </StateProvider>
  );
}

export default App;
