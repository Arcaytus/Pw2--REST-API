const database = require('../../database');

// DELETE /api/users/:userId
module.exports = (route) => {
  route.delete('/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userIndex = database.DB.findIndex((item) => item.id === userId);

    if (userIndex > -1) {
      database.DB.splice(userIndex, 1);
      res.json({
        message: 'User deleted!',
      });
    } else {
      res.sendStatus(404);
    }
  });
};