const router = require('express').Router();
const Projects = require('./projectsModal');
const Restrict = require('../../auth/restrict');

router.get('/', (req, res) => {
    Projects.findProjects()
        .then(id => {
            res.status(200).json({ message: "List of projects", id });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error retrieving projects"});
        });
});

router.post('/', Restrict, (req, res) => {
    const { users_projectid, category, subcategory, status, title, startDate, endDate, cta, desc, goal, primaryPic } = req.body;
    Projects.insertProject({ users_projectid, category, subcategory, status, title, startDate, endDate, cta, desc, goal, primaryPic })
        .then(pro => {
            console.log(pro);
            res.status(201).json({ message: "Project submitted"});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error submitting project"});
        });
});

router.put('/:id', Restrict, (req, res) => {
    const { id } = req.params;
    const { category, subcategory, status, title, startDate, endDate, cta, desc, goal, primaryPic } = req.body
    
    if (!category && !subcategory && !status && !title && !startDate && !endDate && !cta && !desc && !goal && !primaryPic) {
        return res.status(400).json({error: 'Need updates'});
    }
    Projects
          .updateProject(id, {category, subcategory, status, title, startDate, endDate, cta, desc, goal, primaryPic})
          .then(updated => {
              if(updated) {
                res.status(200).json({ updated })
              } else {
                  res.status(404).json({ error: "Project does not exist" })
              }
          })
          .catch(err => {
              console.log(err);
              res.status(500).json({ error: "Error updating project"});
          });
  });

  router.delete('/:id', Restrict, (req, res) => {
    const { id } = req.params;
    console.log("const id", req.params);
      Projects
          .deleteProject(id)
          .then(removed => {
              if (removed) {       
            console.log("remove project", removed); 
              res.status(200).json({ message: "Project was successfully deleted" });
              } else {
                res.status(404).json({ error: "Project does not exist" });
              }
          })
          .catch(err => {
              console.log('delete', err);
              res.status(500).json({ error: "Error deleting project"});
          });
  });


  module.exports = router;