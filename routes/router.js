var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({ response: 'a GET request' });
});

router.post('/', (req, res) => {
  res.json({
    response: 'a POST request',
    body: req.body
  });
});

router.put('/:qID', (req, res) => {
  res.json({
    response: 'a PUT request',
    question: req.params.qID,
    body: req.body
  });
});

router.delete('/:qID', (req, res) => {
  res.json({
    response: 'a DELETE request',
    question: req.params.qID,
    body: req.body
  });
});

module.exports = router;
