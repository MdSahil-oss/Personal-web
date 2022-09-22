import { CHECK_LOGIN } from "../constants/Contants";

export const login = (url, credentials) => {
    return {
        type: CHECK_LOGIN,
        request: {
            op: 'post',
            path: `${url}`,
            data: credentials
        }
    }
}
