import { LOGIN } from "../constants/Contants";

const initialState = {
    post: {
        error: null,
        loaded: false,
        loading: false,
    },
};

function getRequestKey(actionType) {
    return actionType.split('_')[0].toLowerCase();
}

// eslint-disable-next-line import/no-anonymous-default-export
const login = (state = initialState, action = {}) => {
    switch (action.type) {
        case `${LOGIN}_PENDING`:
            return {
                ...state,
                [getRequestKey(action.type)]: {
                    loading: true,
                    loaded: false,
                    error: null,
                },
            };

        case `${LOGIN}_SUCCESS`:
            return {
                ...state,
                data: action.data,
                [getRequestKey(action.type)]: {
                    loading: false,
                    loaded: true,
                    error: null,
                },
            };
        case `${LOGIN}_FAIL`:
            return {
                ...state,
                projects: [],
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

export default login;