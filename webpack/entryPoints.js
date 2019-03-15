const path = require('path');

const basePaths = {
  YEEYEE_COMPONENTS: path.resolve(__dirname, '..', 'src', 'components'),
};

const entryPoints = {
  'yeeyee-button': path.resolve(basePaths.YEEYEE_COMPONENTS, 'Button'),
  'yeeyee-navbar': path.resolve(basePaths.YEEYEE_COMPONENTS, 'Navbar'),
  'yeeyee-icon': path.resolve(basePaths.YEEYEE_COMPONENTS, 'Icon'),
};

module.exports = entryPoints;
