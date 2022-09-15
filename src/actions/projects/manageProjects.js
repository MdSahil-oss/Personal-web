import { GET_PROJECTS, GET_PROJECT, PATCH_PROJECT, POST_PROJECT, DELETE_PROJECT } from "../../constants/Contants"

export const getProjects = (url) => {
    console.log("passed URL to getProject() is ", url)
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
        }
    }
}

export const postProject = (url) => {
    return {
        type: POST_PROJECT,
        request: {
            op: 'post',
            path: `${url}`
        }
    }
}

export const patchProject = (url, id) => {
    return {
        type: PATCH_PROJECT,
        request: {
            op: 'patch',
            path: `${url}/api/update`,
            id: { id },
        }
    }
}

export const deleteProject = (url, id) => {
    return {
        type: DELETE_PROJECT,
        request: {
            op: 'delete',
            path: `${url}/api/delete`,
            id: { id },
        }
    }
}