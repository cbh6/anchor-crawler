const { body, check } = require('express-validator');

module.exports = {
  create: () => {
    return [check('url', 'Url is required').notEmpty()];
  },
};
