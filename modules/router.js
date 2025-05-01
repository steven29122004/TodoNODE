const express = require('express');
const router = express.Router();
const Controller = require('./controller');

router.get('/', Controller.getPage);
router.post('/', Controller.postInput)

module.exports = router;