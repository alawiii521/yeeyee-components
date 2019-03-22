const path = require('path');

const BasePaths = {
  YEEYEE_COMPONENTS: path.resolve(__dirname, '..', 'src', 'components'),
};

const entryPoints = {
  'yeeyee-button': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'Button'),
  'yeeyee-navbar': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'Navbar'),
  'yeeyee-icon': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'Icon'),
  'yeeyee-button-icon': path.resolve(
    BasePaths.YEEYEE_COMPONENTS,
    'Button',
    'IconButton'
  ),
  'yeeyee-overlay': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'Overlay'),
};

module.exports = entryPoints;
