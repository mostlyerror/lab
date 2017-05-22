const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  // res.json(req.query);
  res.render('hello', {
    name: 'ben',
    dog: req.query.dog,
    title: 'I love food'
  });
  // res.render('layout');
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
