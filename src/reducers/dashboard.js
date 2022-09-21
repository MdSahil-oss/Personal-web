import { DASHBOARD } from "../constants/Contants";

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
const dashboard = (state = initialState, action = {}) => {
    switch (action.type) {
        case `${DASHBOARD}_PENDING`:
            return {
                ...state,
                [getRequestKey(action.type)]: {
                    loading: true,
                    loaded: false,
                    error: null,
                },
            };

        case `${DASHBOARD}_SUCCESS`:
            return {
                ...state,
                [getRequestKey(action.type)]: {
                    loading: false,
                    loaded: true,
                    error: null,
                },
            };

        case `${DASHBOARD}_FAIL`:
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

export default dashboard;