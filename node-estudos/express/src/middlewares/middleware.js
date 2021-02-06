exports.middlewareGlobal = (req, res, next) => {
    console.log('uma rota foi iniciada');

    next();
};

exports.checkCsrfError = (err, req, res, next) => {
	if (err && 'EBADCSRFTOKEN' === err.code) {
		return res.render('error', {error: err});
	} else {
		next();
	};
};

exports.csrfMiddleware = (req, res, next) => {
	res.locals.csrfToken = req.csrfToken();
	next();
};