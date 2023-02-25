export default (state, action) => {
    switch (action.type) {
        case "GET_SELECTED_PROJECT":
            return {
                ...state,
                selectedProject: action.payload
            };
        case "SET_SELECTED_PROJECT":
            return {
                ...state,
                selectedProject: action.payload
            };
        case "SET_PROJECT_LIST":    
            return {
                ...state,
                projectList: action.payload
            }
        case "SWITCH_THEME": 
            return {
                ...state,
                isDarkTheme: action.payload
            }    
      default:
        return state;
    }
};