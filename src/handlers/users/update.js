const { DB } = require('../../database');
const database = require('../../database');

// DELETE /api/users/:userId
module.exports = (route) => {
  route.put('/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const { name, age } = req.body;
    
    const newInfo = {
      name: name,
      age: age
    };

    DB.push(newInfo);
    res.send(newInfo);
  });
};
