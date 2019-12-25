import initialState from "./initialState";
import StateContext, {
  StateProvider,
  useStateValue,
  withAppState
} from "./context";
import StateReducer from "./reducer";

export default StateProvider;
export {
  initialState,
  StateContext,
  StateProvider,
  useStateValue,
  withAppState,
  StateReducer
};
