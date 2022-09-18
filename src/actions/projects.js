import { GET_PROJECTS, GET_PROJECT, PATCH_PROJECT, POST_PROJECT, DELETE_PROJECT } from "../constants/Contants"

export const getProjects = (url) => {
    return {
        type: GET_PROJECTS,
        request: {
            op: 'get',
            path: `${url}`
        }
    }
}

export const getProject = (url, id) => {
    return {
        type: GET_PROJECT,
        request: {
            op: 'get',
            path: `${url}`,
            data: { id }
        },
        projects: null
    }
}

export const postProject = (url, data) => {
    return {
        type: POST_PROJECT,
        request: {
            op: 'POST',
            path: `${url}`,
            data: data
        }
    }
}

export const patchProject = (url, data) => {
    return {
        type: PATCH_PROJECT,
        request: {
            op: 'patch',
            path: `${url}`,
            data: { data },
        }
    }
}

export const deleteProject = (url, data) => {
    return {
        type: DELETE_PROJECT,
        request: {
            op: 'delete',
            path: `${url}`,
            data: data,
        }
    }
}