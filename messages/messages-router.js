const router = require('express').Router();
const mm = require('./messages-model');

router.get('/students/:id', (req, res) => {
	const { id } = req.params;
	mm
		.find(id)
		.then((messages) => {
			res.json(messages);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to retrieve messages' });
		});
});

router.post('/', (req, res) => {
	const newMessages = req.body;
	mm
		.add(newMessages)
		.then((message) => {
			res.status(201).json(message);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err.message);
		});
});

module.exports = router;
