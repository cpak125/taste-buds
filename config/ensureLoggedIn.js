module.exports = function(req, res, next) {
  // Send back status code of 401 - 'Unauthorized' if not logged in
  if (!req.user) return res.status(401).json('Unauthorized');
  // everything is cool
  next();
};