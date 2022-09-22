import { CHECK_DASHBOARD } from "../constants/Contants";

export const dashboard = (url, token) => {
    return {
        type: CHECK_DASHBOARD,
        request: {
            op: 'post',
            path: `${url}`,
            data: token
        }
    }
}