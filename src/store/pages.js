const setActivePage = (pages, page) => {
    const newPages = { ...pages };
    const keys = Object.keys(newPages);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (newPages[key] === "active") newPages[key] = "post";
        if (key === page){
            newPages["nav"] = page;
            newPages[key] = "active";
        }
    }
    return newPages;
};

const resetAllPages = (pages) => {
    const newPages = { ...pages };
    const keys = Object.keys(newPages);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (newPages[key] === "post") newPages[key] = "pre";
    }
    return newPages;
};

const SET_ACTIVE = "pages/SET_ACTIVE";
const RESET_PAGES = "pages/RESET_PAGES";

export const setPage = (page) => {
    return {
        type: SET_ACTIVE,
        page
    };
};

export const resetPage = () => {
    return {
        type: RESET_PAGES,
        page: null
    };
};

const initialState = {
    nav: "home",
    home: "active",
    about: "pre",
    index: "pre",
    projects: "pre",
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE:
            return setActivePage(state, action.page);
        case RESET_PAGES:
            return resetAllPages(state);
        default:
            return state
    }
};