const router = require('express').Router();
const mm = require('./messages-model');

router.get('/students/:id', (req, res) => {
	const { id } = req.params;
	mm
		.find(id)
		.then((messages) => {
			if (messages.length) {
				res.json(messages);
			} else {
				res.status(404).json({ message: 'Could not find messages for given student' });
			}
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
