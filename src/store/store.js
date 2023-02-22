import { createStore } from "redux";
import rotateReducer from "../reducers/reducer";

const initialState = {
    selectedProject : undefined,
    projectList : []
}

function configureStore(state = initialState) {
  return createStore(rotateReducer,state);
}

export default configureStore;