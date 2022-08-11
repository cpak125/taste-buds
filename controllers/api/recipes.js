const Recipe = require('../../models/recipe');

module.exports = {
  getAll,
  create
};

async function getAll(req, res) {
  const recipes = await Recipe.find({
    user: req.user._id
  });
};

async function create(req, res) {
  req.body.user = req.user._id;
  const recipe = await Recipe.create(req.body);
  res.json(recipe);
}