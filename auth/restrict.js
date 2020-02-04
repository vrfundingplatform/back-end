const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
  jwt.verify(token, process.env.JWT_SECRET || 'lalalalkdjhaha', (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: 'Login required' });
      } else {
        req.user = decodedToken;
        next();
      }
  });
} else {
  res.status(400).json({ error: "The request cannot be completed"});
  }
};