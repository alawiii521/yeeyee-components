const path = require('path');

const BasePath = {
  YEEYEE_COMPONENTS: path.resolve(__dirname, '..', 'src', 'components'),
};

const components = {
  'yeeyee-button': path.resolve(BasePath.YEEYEE_COMPONENTS, 'Button'),
  'yeeyee-navbar': path.resolve(BasePath.YEEYEE_COMPONENTS, 'Navbar'),
  'yeeyee-icon': path.resolve(BasePath.YEEYEE_COMPONENTS, 'Icon'),
  'yeeyee-button-icon': path.resolve(BasePath.YEEYEE_COMPONENTS, 'IconButton'),
  'yeeyee-drawer': path.resolve(BasePath.YEEYEE_COMPONENTS, 'Drawer'),
  'yeeyee-overlay': path.resolve(BasePath.YEEYEE_COMPONENTS, 'Overlay'),
  'yeeyee-drawer-item': path.resolve(BasePath.YEEYEE_COMPONENTS, 'DrawerItem'),
};

module.exports = { components };
