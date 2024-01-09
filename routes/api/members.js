const express = require('express');
const router = express.Router();
const members = require('../../Members'); //Captures data from Members.js

/* Capturing All Members */
/*  
  This line sets up a route handler for HTTP GET requests to 
  '/api/members' path. When a request is made to this path, the server
  responds with the members data in JSON format.  */
router.get('/', (req, res) => res.json(members));

/* Getting a Single Member */
router.get('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
