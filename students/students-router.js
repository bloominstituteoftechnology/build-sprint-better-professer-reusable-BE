const router = require('express').Router();

const Students = require('./students-model');

router.get('/user/:id', (req, res) => {
	const { id } = req.params;
    Students.find(id)
		.then(students => {
            res.status(200).json(students);			
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ error: 'Could not load students' });
		});
});

router.post('/', (req, res) => {
	const body = req.body;
	if (body.student_name && body.user_id) {
		Students.add(body)
			.then((students) => {
				res.status(201).json(students);
			})
			.catch((error) => {
				console.log(error);
				res.status(500).json({ error: 'Could not add student' });
			});
	} else {
		res.status(401).json({ message: 'Must include student name and user id' });
	}
});

router.put('/:id', (req, res) => {
	const id = req.params.id;
	const body = req.body;

	Students.change(id, body)
		.then((student) => {
            if(student){
                res.status(200).json(student);
            } else {
               return res.status(400).json({message: `Student with id ${id} does not exist`})
            }
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ error: 'Could not update student' });
		});
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;

	Students.remove(id)
		.then((student) => {
			res.status(200).json(student);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ error: 'Could not delete student' });
		});
});

module.exports = router;
