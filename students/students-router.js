const router = require('express').Router();

const Students = require('./students-model');

router.get('/:id', (req, res) => {
	const { id } = req.params;
	Students.find(id)
		.then((students) => {
			res.status(200).json(students);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ error: 'Could not load students' });
		});
});

module.exports = router;
