const router = requre("express").Router();
const Users = require("../users/user-model");

router.get("/students/projects", (req, res) => {
  Users.find()
    .then(allProjects => {
      res.json({ allProjects });
    })
    .catch(err => res.send(err));
});

router.get("/students/:id/projects", (req, res) => {
  const { id } = req.params;
  Users.find(id)
    .then(projects => {
      if (projects.length) {
        res.json(projects);
      } else {
        res
          .status(404)
          .json({ messgae: "Could not find projects for given student" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve projects" });
    });
});

router.post("/students/projects", (req, res) => {
  const newProject = req.body;
  Users.add(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Users.findById(id)
    .then(project => {
      if (project) {
        Users.update(changes, id).then(updatedProject => {
          res.json(updatedProject);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update project" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Users.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(400)
          .json({ message: "Could not find prroject with that ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete project" });
    });
});

module.exports = router;

// {project_name: "Snow Flair", deadline: "11/1/2019", description: "The sky is clear,the stars are twinkling.", student_id: 1},
// {project_name: "Chive Agenda", deadline: "12/12/2019", description: "Joe made the sugar cookies, Susan decorated them", student_id: 1},
// {project_name: "Flip Pick", deadline: "2/1/2020", description: "The book is in front of the table", student_id: 1},
// {project_name: "Peak Row", deadline: "11/25/2019", description: "The mysterious diary records the voice", student_id: 2},
// {project_name: "Jive Rex", deadline: "12/11/2019", description: "The waves were crashing on the shore, it was a lovely sight", student_id: 2},
// {project_name: "Flip Veil", deadline: "12/3/2019", description: "We need to rent a room for our party", student_id: 3},
// {project_name: "Bay Hound", deadline: "1/19/2020", description: "It was getting dark, and we weren’t there yet", student_id: 3}
