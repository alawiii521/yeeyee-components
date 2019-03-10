const path = require('path');

const basePaths = {
  YEEYEE_COMPONENTS: path.resolve(__dirname, '..', 'src', 'components'),
};

const entryPoints = {
  'yeeyee-button': path.resolve(basePaths.YEEYEE_COMPONENTS, 'Button'),
  'yeeyee-navbar': path.resolve(basePaths.YEEYEE_COMPONENTS, 'Navbar'),
};

module.exports = entryPoints;
