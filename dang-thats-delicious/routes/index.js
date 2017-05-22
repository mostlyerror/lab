const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
