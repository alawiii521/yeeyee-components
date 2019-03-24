const path = require('path');

const BasePaths = {
  YEEYEE_COMPONENTS: path.resolve(__dirname, '..', 'src', 'components'),
};

const entryPoints = {
  'yeeyee-button': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'Button'),
  'yeeyee-navbar': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'Navbar'),
  'yeeyee-icon': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'Icon'),
  'yeeyee-button-icon': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'IconButton'),
  'yeeyee-drawer': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'Drawer'),
  'yeeyee-overlay': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'Overlay'),
  'yeeyee-drawer-item': path.resolve(BasePaths.YEEYEE_COMPONENTS, 'DrawerItem'),
};

module.exports = entryPoints;
