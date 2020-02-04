const router = require('express').Router();
const Users = require('./usersModal');

router.get('/users', (req, res) => {
    const { username, email, firstname, lastname, country, state, avatar, bio, bankacct, age, password } = req.body;
    Users.insert({ username, email, firstname, lastname, country, state, avatar, bio, bankacct, age, password })
        .then(id => {
            res.status(201).json({ message: "User registered", id });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error registering user"});
        });
});

router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, firstname, lastname, country, state, avatar, bio, bankacct, age, password } = req.body
    
    if (!username && !email && !firstname && !lastname && !country && !state && !avatar && !bio && !bankacct && !age && !password) {
        return res.status(400).json({error: 'Need updates'});
    }
    Users
          .updateUser(user)
          .then(user => {
              if (user && bcrypt.compareSync(password, user.password)) {   
                  const token = generateToken(user);     
              res.status(200).json({ 
                  message: `Welcome back! ${ user.username }`,
                  token
              });
              } else {
                  res.status(401).json({ error: "Invalid password", id });
              }
          })
          .catch(err => {
              console.log(err);
              res.status(500).json({ error: "Error registering user"});
          });
  });

  router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
      Users
          .deleteUser(id)
          .then(removed => {
              if (removed) {        
              res.status(204).end();
              } else {
                res.status(404).json({ error: "User id does not exist" });
              }
          })
          .catch(err => {
              console.log('delete', err);
              res.status(500).json({ error: "Error deleting user"});
          });
  });
  


  module.exports = router;