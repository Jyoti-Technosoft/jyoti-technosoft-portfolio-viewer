export default (state, action) => {
    switch (action.type) {
        case "GET_SELECTED_PROJECT":
            return {
                selectedProject: action.payload
            };
        case "SET_SELECTED_PROJECT":
            return {
                selectedProject: action.payload
            };
        case "SET_PROJECT_LIST":    
            return {
                projectList: action.payload
            }
      default:
        return state;
    }
};