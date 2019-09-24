const router = require("express").Router();
const projectsmodel = require("./projects-model.js")

router.get("/students/:id", (req, res) => {
  const { id } = req.params;
  projectsmodel.find(id)
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
  projectsmodel.add(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json(err.message );
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  
        projectsmodel.update(id, changes).then(updatedProject => {
          if(updatedProject) {
          res.json(updatedProject);
          } else {
        res
          .status(404)
          .json({ message: "Could not find project with given ID" });
      }
      })
            .catch(err => {
              console.log(err)
      res.status(500).json({ message: "Failed to update project" });
      })
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  projectsmodel.remove(id)
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
