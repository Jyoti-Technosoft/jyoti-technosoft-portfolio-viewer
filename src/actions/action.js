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