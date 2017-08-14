const express = require('express');
const router = express.Router();

const exampleController = require('../api/controllers/exampleController');

// GET /api/example
router.get('/example', exampleController.list);

// GET /api/example/:id
router.get('/example/:id', exampleController.find);

module.exports = router;
