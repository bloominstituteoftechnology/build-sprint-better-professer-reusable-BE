const router = require('express').Router();

const Users = require('./user-model');
const bcrypt = require('bcryptjs');

const tk = require('../config/generateToken');

router.post('/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 8);
	user.password = hash;

	Users.add(user)
		.then((saved) => {
			res.status(201).json(saved);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;
	Users.findBy({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = tk.generateToken(user);
				res.status(200).json({ id: user.id, token });
			} else {
				res.status(401).json({ message: 'Invalid credentials' });
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json(error);
		});
});

module.exports = router;
