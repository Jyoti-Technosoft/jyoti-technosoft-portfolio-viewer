export const getSelectedProjectAction = {
    type: "GET_SELECTED_PROJECT",
    payload: true
};

export const setSelectedProjectAction = (payload) => {
    return {
        type: "SET_SELECTED_PROJECT",
        payload: payload 
    }
};

export const setProjectListAction = (payload) => {
    return {
        type: "SET_PROJECT_LIST",
        payload: payload 
    }
}

export const switchTheme = (payload) => {
    return {
        type: "SWITCH_THEME",
        payload: payload
    }
};
