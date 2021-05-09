const database = require('../../database');

// GET /api/users
module.exports = (route) => {
  route.get('/', (req, res) => {
    res.json(database.DB);
  });
};