import { GET_PROJECTS, GET_PROJECT, PATCH_PROJECT, POST_PROJECT, DELETE_PROJECT } from '../constants/Contants'

const initialState = {
    projects: [],
    get: {
        error: null,
        loaded: false,
        loading: false,
    },
    post: {
        error: null,
        loaded: false,
        loading: false,
    },
    // patch: {
    //     error: null,
    //     loaded: false,
    //     loading: false,
    // },
    delete: {
        error: null,
        loaded: false,
        loading: false,
    },
};

function getRequestKey(actionType) {
    return actionType.split('_')[0].toLowerCase();
}

// eslint-disable-next-line import/no-anonymous-default-export
const projects = (state = initialState, action = {}) => {
    switch (action.type) {
        case `${GET_PROJECTS}_PENDING`:
        case `${GET_PROJECT}_PENDING`:
        case `${POST_PROJECT}_PENDING`:
        case `${DELETE_PROJECT}_PENDING`:
            // console.log(action.type)
            return {
                ...state,
                [getRequestKey(action.type)]: {
                    loading: true,
                    loaded: false,
                    error: null,
                },
            };

        case `${GET_PROJECTS}_SUCCESS`:
        case `${GET_PROJECT}_SUCCESS`:
            // console.log(action.type);
            // console.log("action.data is", action.data);
            return {
                ...state,
                projects: action.data,
                [getRequestKey(action.type)]: {
                    loading: false,
                    loaded: true,
                    error: null,
                },
            };

        case `${POST_PROJECT}_SUCCESS`:
        case `${DELETE_PROJECT}_SUCCESS`:
            // console.log(action.type);
            return {
                ...state,
                [getRequestKey(action.type)]: {
                    loading: false,
                    loaded: true,
                    error: null,
                },
            };

        case `${GET_PROJECTS}_FAIL`:
        case `${GET_PROJECT}_FAIL`:
            // console.log(action.type)
            return {
                ...state,
                projects: [],
                [getRequestKey(action.type)]: {
                    loading: false,
                    loaded: false,
                    error: action.error,
                },
            };

        case `${POST_PROJECT}_FAIL`:
        case `${DELETE_PROJECT} _FAIL`:
            // console.log(action.type)
            return {
                ...state,
                [getRequestKey(action.type)]: {
                    loading: false,
                    loaded: false,
                    error: action.error,
                },
            };
        default:
            return state;
    }
}

export default projects;