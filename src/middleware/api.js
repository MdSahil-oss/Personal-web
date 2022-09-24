const loggerMiddleware = function (store) {
    return function (next) {
        return function (action) {
            const { request, type, ...rest } = action;

            if (!request) {
                return next(action);
            }

            next({ ...rest, type: `${type}_PENDING` });

            const actionPromise = fetch(`http://localhost:5000/api${request.path}`, {
                method: request.op,
                headers: request.data && { 'Content-Type': 'application/json' },
                body: request.data && JSON.stringify(request.data),
            });

            actionPromise.then(async (response) => {
                if( response.status !== 200 ) {
                    let error = await response.json();
                    throw new Error(error.message);
                }
                response.json().then((data) => next({ data, type: `${type}_SUCCESS` }));
            }).catch(error => {
                next({ error, type: `${type}_FAIL` });
                alert(error);
            });

            return actionPromise;
        };
    };
};

export default loggerMiddleware;