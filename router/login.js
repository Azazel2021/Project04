const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Login page';

  res.render('login', { title });
});


router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    req.session.username = username;
    res.redirect('/');
  } else {
    res.redirect('/login')
  }
});

module.exports = router;