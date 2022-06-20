const notFound = (req, res, next) => {
	res.status(404).send('Not Found');
};

const serverError = (err, req, res, next) => {
	console.log(err);
	res.status(500).send('Somthing Error');
};

export {notFound, serverError};
