const router = require('express').Router();
const Users = require('./usersModal');

router.get('/', (req, res) => {
    Users.find()
        .then(id => {
            res.status(200).json({ message: "List of users", id });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error retrieving users"});
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, firstname, lastname, country, state, avatar, bio, bankacct, age, password } = req.body
    
    if (!username && !email && !firstname && !lastname && !country && !state && !avatar && !bio && !bankacct && !age && !password) {
        return res.status(400).json({error: 'Need updates'});
    }
    Users
          .updateUser(id, {username, email, firstname, lastname, country, state, avatar, bio, bankacct, age, password})
          .then(updated => {
              if (updated) {Users.findById(updated)
              .then (updated => {
                res.status(200).json({ updated })})
              } else {
                  res.status(404).json({ error: "User with id does not exist" })
              }
          })
          .catch(err => {
              console.log(err);
              res.status(500).json({ error: "Error updating user profile"});
          });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params);
      Users
          .deleteUser(id)
          .then(removed => {
              res.status(201).json({ message: "Profile was successfully deleted", userid:`${id} was deleted` });
          })
          .catch(err => {
              console.log('delete', err);
              res.status(500).json({ error: "Error deleting user"});
          });
  });
  


  module.exports = router;