import { LOGIN } from "../constants/Contants";

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