import { GET_PROJECTS, GET_PROJECT, PATCH_PROJECT, POST_PROJECT, DELETE_PROJECT } from "../../constants/Contants"

export const getProjects = (url) => {
    return {
        type: GET_PROJECTS,
        request: {
            op: 'get',
            path: `${url}/`
        }
    }
}

export const getProject = (url, id) => {
    return {
        type: GET_PROJECT,
        request: {
            op: 'get',
            path: `${url}/getOne`,
            data: { id }
        }
    }
}

export const postProject = (url) => {
    return {
        type: POST_PROJECT,
        request: {
            op: 'post',
            path: `${url}/post`
        }
    }
}

export const patchProject = (url, id) => {
    return {
        type: PATCH_PROJECT,
        request: {
            op: 'patch',
            path: `${url}/update`,
            id: { id },
        }
    }
}

export const deleteProject = (url, id) => {
    return {
        type: DELETE_PROJECT,
        request: {
            op: 'delete',
            path: `${url}/delete`,
            id: { id },
        }
    }
}