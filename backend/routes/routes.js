const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) =>{
  res.send('Server sending routes');
});

module.exports = router;