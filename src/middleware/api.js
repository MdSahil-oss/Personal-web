// eslint-disable-next-line import/no-anonymous-default-export
export default store => next => action => {
    const { request, type, ...rest } = action;

    if (!request) {
        return next(action);
    }

    next({ ...rest, type: `${type}_PENDING` })

    const actionPromise = fetch(`http://localhost:5000${request.path}`, {
        method: request.op,
        body: request.data && JSON.stringify(request.data)
    });

    actionPromise.then(response => {
        response.json().then(data => next({ data, type: `${type}_SUCCESS` }));
    });

    return actionPromise;
}