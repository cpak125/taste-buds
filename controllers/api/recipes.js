const Recipe = require('../../models/recipe');

module.exports = {
  getAll
};

async function getAll(req, res) {
  const recipes = await Recipe.find({
    user: req.user._id
  });
  res.json(recipes);
};