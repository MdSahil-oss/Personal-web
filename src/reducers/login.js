import { CHECK_LOGIN } from "../constants/Contants";

const initialState = {
    token: {},
    check: {
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
        case `${CHECK_LOGIN}_PENDING`:
            return {
                ...state,
                [getRequestKey(action.type)]: {
                    loading: true,
                    loaded: false,
                    error: null,
                },
            };

        case `${CHECK_LOGIN}_SUCCESS`:
            return {
                ...state,
                token: action.data["token"],
                [getRequestKey(action.type)]: {
                    loading: false,
                    loaded: true,
                    error: null,
                },
            };

        case `${CHECK_LOGIN}_FAIL`:
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

export default login;