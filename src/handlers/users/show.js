const database = require('../../database');

// GET /api/users/:userId
module.exports = (route) => {
  route.get('/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userIndex = database.DB.find((item) => item.id === userId);

    if (userIndex) {
      res.json(userIndex);
    } else {
      res.sendStatus(404);
    }
  });
};