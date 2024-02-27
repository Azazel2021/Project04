const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Verkefni 04';
  let user = '';
  
  if (req.session.username) {
    user = req.session.username;
  }

  res.render('index', { title, user });
});

module.exports = router;