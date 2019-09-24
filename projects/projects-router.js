const router = requre("express").Router();
const Users = require("../users/user-model");


router.get("/students/:id", (req, res) => {
  const { id } = req.params;
  Users.find(id)
    .then(projects => {
      if (projects.length) {
        res.json(projects);
      } else {
        res
          .status(404)
          .json({ message: "Could not find projects for given student" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve projects" });
    });
});

router.post("/", (req, res) => {
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

// {project_name: "Draw a Blank", deadline: "11/1/2019", description: "The sky is clear,the stars are twinkling.", student_id: 1},
// {project_name: "Wild Goose Chase", deadline: "12/12/2019", description: "Futilely pursue something that will never be attainable", student_id: 1},
// {project_name: "Raining Cats and Dogs", deadline: "2/1/2020", description: "Make it rain very heavily", student_id: 1},
// {project_name: "Shot In the Dark", deadline: "11/25/2019", description: "Attempt something that has little chance for success", student_id: 2},
// {project_name: "Jumping the Gun", deadline: "12/11/2019", description: "Start too early before preparations are ready", student_id: 2},
// {project_name: "Tough it Out", deadline: "12/3/2019", description: "Remain resillient even in hard times.", student_id: 3},
// {project_name: "Elephant in the room", deadline: "1/19/2020", description: "Ignore a large, obvious problem or fail to address an issue that stands out in a major way", student_id: 3}
