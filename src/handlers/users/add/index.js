const database = require('../../../database');

// POST /api/users
module.exports = (route) => {
  route.post('/', (req, res) => {
    const user = {
      name: req.body.name,
      age: req.body.age,
    };

    const userName = user.name.toLowerCase().trim();

    if (
      database.DB.some((item) => item.name.toLowerCase().trim() === userName)
    ) {
      res.status(409).json({
        message: '`name` ya existe',
      });
    } else {
      database.add(user);
      res.json(user);
    }
  });
};