const { DB } = require('../../database');
const database = require('../../database');

// DELETE /api/users/:userId
module.exports = (route) => {
  route.put('/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const { name, age } = req.body;
    const userIndex = database.DB.findIndex((item) => item.id === userId);

    
    if (userIndex === userIndex) {
      userIndex.name = req.body.name;
      userIndex.age = req.body.age;
      res.send('User updated!');
    } else {
      res.sendStatus(404);
    }

  });
};
