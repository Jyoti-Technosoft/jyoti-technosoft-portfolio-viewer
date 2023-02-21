import { createStore } from "redux";
import rotateReducer from "../reducers/reducer";

function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer,state);
}

export default configureStore;