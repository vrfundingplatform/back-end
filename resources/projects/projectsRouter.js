const router = require('express').Router();
const Users = require('./projectsModal');

router.get('/', (req, res) => {
    Projects.find()
        .then(id => {
            res.status(200).json({ message: "List of projects", id });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error retrieving projects"});
        });
});

router.put('/projects', (req, res) => {
    const { id } = req.params;
    const { cateogory, subcategory, status, title, startDate, endDate, cta, desc, goal, primaryPic } = req.body
    
    if (!cateogory && !subcategory && !status && !title && !startDate && !endDate && !cta && !desc && !goal && !primaryPic) {
        return res.status(400).json({error: 'Need updates'});
    }
    Users
          .updateProject(id, {username, email, firstname, lastname, country, state, avatar, bio, bankacct, age, password})
          .then(updated => {
              if (updated) {Projects.findById(updated)
              .then (updated => {
                res.status(200).json({ updated })})
              } else {
                  res.status(404).json({ error: "Project does not exist" })
              }
          })
          .catch(err => {
              console.log(err);
              res.status(500).json({ error: "Error updating project"});
          });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params);
      Users
          .deleteUser(id)
          .then(removed => {
              if (removed) {        
              res.status(204).end({ message: "Project was successfully deleted" });
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