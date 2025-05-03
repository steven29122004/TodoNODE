const express = require('express');
const router = express.Router();
const Controller = require('./controller');

router.get('/', Controller.getPage);
router.get('/api/:id', Controller.getInputAPI);

router.post('/', Controller.postInput)
router.get('/:id', Controller.getTodoListInfo);

router.put('/edit/:id', Controller.editInput)
router.delete('/:id', Controller.delete)

module.exports = router;