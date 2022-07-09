const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports = {
  create,
};

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can serialize a string
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad request
    res.status(400).json(err);
  }
}


/* Helper Functions */

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );


}