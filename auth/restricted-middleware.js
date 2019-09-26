const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
	if (process.env.NODE_ENV === 'testing') {
		next();
	} else {
		const token = req.headers.authorization;
		console.log(token);
		if (token) {
			jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
				if (err) {
					console.log(err);
					res.status(401).json({ message: 'You shall not pass!' });
				} else {
					req.user = { username: decodedToken.username };
					next();
				}
			});
		} else {
			res.status(400).json({ message: 'No credentials provided' });
		}
	}
};
