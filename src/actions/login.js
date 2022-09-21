import { DASHBOARD, LOGIN } from "../constants/Contants";

export const login = (url, credentials) => {
    return {
        type: LOGIN,
        request: {
            op: 'post',
            path: `${url}`,
            data: credentials
        }
    }
}

export const dashboard = (url, token) => {
    return {
        type: DASHBOARD,
        request: {
            op: 'post',
            path: `${url}`,
            data: token
        }
    }
}