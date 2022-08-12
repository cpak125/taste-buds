const Recipe = require('../../models/recipe');

module.exports = {
  getAll,
  create
};

async function getAll(req, res) {
  const recipes = await Recipe.find({
    user: req.user._id
  });
  res.json(recipes);
};

async function create(req, res) {
  try {
    const recipeExists = await Recipe.findOne({ user: req.user._id, title: req.body.title });
    if (recipeExists) throw new Error();
    req.body.user = req.user._id;
    const recipe = await Recipe.create(req.body);
    res.json(recipe);
  } catch {
    res.status(400).json('Recipe has already been saved');
  }

}