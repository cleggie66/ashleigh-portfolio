const setActiveProject = (pages, project) => {
    const newPages = { ...pages };
    newPages.activeProject = project;
    return newPages;
};

const SET_ACTIVE = "activeProject/SET_ACTIVE";

export const setProject = (activeProject) => {
    return {
        type: SET_ACTIVE,
        activeProject
    };
};

const initialState = {
    activeProject: 1,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE:
            return setActiveProject(state, action.activeProject);
        default:
            return state
    }
};