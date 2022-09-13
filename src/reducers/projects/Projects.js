import { GET_PROJECTS, GET_PROJECT, PATCH_PROJECT, POST_PROJECT, DELETE_PROJECT } from '../../constants/Index'

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
    patch: {
        error: null,
        loaded: false,
        loading: false,
    },
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
export default function (state = initialState, action = {}) {
    switch (action.type) {
        case `${GET_PROJECTS}_PENDING`:
        case `${GET_PROJECT}_PENDING`:
        case `${POST_PROJECT}_PENDING`:
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
        case `${POST_PROJECT}_SUCCESS`:
            return {
                ...state,
                projects: action.result,
                [getRequestKey(action.type)]: {
                    loading: false,
                    loaded: true,
                    error: null,
                },
            };
        case `${GET_PROJECTS}_FAIL`:
        case `${GET_PROJECT}_FAIL`:
            return {
                ...state,
                projects: [],
                [getRequestKey(action.type)]: {
                    loading: false,
                    loaded: false,
                    error: action.error,
                },
            };
        // case `${POST_PROJECT}_FAIL`:
        //     return {
        //         ...state,
        //         [getRequestKey(action.type)]: {
        //             loading: false,
        //             loaded: false,
        //             error: action.error,
        //         },
        //     };
        default:
            return state;
    }
}