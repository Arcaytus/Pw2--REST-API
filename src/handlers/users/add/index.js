const database = require('../../../database');
const { body, validationResult } = require("express-validator");

// POST /api/users
module.exports = (route) => {
  route.post('/', 
  body("name")
  .trim()
  .notEmpty()
  .withMessage("Campo obligatorio")
  .isLength({ min: 3 })
  .withMessage("Debe tener 3 caracteres"),
  body("age")
  .notEmpty()
  .withMessage("Campo obligatorio")
  .isInt()
  .withMessage("Debe ser un número entero"), (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const name = req.body.name;
    const age = req.body.age;

    const user = {
      name: name.trim(),
      age: parseInt(age),
    };

    if (
      database.DB.some((item) => item.name.toLowerCase().trim() === user)
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