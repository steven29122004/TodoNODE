const express = require('express');
const router = express.Router();
const Controller = require('./controller');

router.get('/', Controller.getPage);
router.get('/form', Controller.getForm);
router.get('/api/:id', Controller.getInputAPI);
router.post('/', Controller.postInput)
router.get('/:id', Controller.getTodoListInfo);
router.delete('/:id', Controller.delete)

module.exports = router;