import { GET_BLOG, GET_BLOGS, POST_BLOG, PATCH_BLOG, DELETE_BLOG } from "../../constants/Index"

export const getBlogs = (url) => {
    return {
        type: GET_BLOGS,
        request: {
            op: 'get',
            path: `${url}/`
        }
    }
}

export const getBlog = (url, id) => {
    return {
        type: GET_BLOG,
        request: {
            op: 'get',
            path: `${url}/getOne`,
            id: id
        }
    }
}

export const postBlog = (url) => {
    return {
        type: POST_BLOG,
        request: {
            op: 'post',
            path: `${url}/post`
        }
    }
}

export const patchBlog = (url, id) => {
    return {
        type: PATCH_BLOG,
        request: {
            op: 'patch',
            path: `${url}/update`,
            id: { id },
        }
    }
}

export const deleteBlog = (url, id) => {
    return {
        type: DELETE_BLOG,
        request: {
            op: 'delete',
            path: `${url}/delete`,
            id: { id },
        }
    }
}