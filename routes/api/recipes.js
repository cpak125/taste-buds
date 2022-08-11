const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

// GET /api/recipes/saved
router.get('/', recipesCtrl.getAll);

// POST /api/recipes/saved
router.post('/', recipesCtrl.create);

module.exports = router;