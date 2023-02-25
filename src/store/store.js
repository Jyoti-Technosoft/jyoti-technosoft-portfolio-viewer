import { createStore } from "redux";
import reducer from "../reducers/reducer";

const initialState = {
    selectedProject : undefined,
    projectList : [],
    isDarkTheme: false, 
}

function configureStore(state = initialState) {
  return createStore(reducer,state);
}

export default configureStore;