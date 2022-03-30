exports.success = (req, res, message, status) => {
    const statusCode = status || 200;
    const body = message || 'Success';

    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body
    });
};

exports.error = (req, res, message, status) => {
    const statusCode = status || 500;
    const body = message || 'Internal server error';

    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body
    });
}