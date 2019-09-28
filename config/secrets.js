module.exports = {
	jwtSecret: process.env.JWT_SECRET || 'keep it secret',
	environment: process.env.NODE_ENV
};
