const db = require('../data/dbConfig');

module.exports = () => {
	return db.migrate.rollback().then(() => db.migrate.latest()).then(() => db.seed.run());
};
