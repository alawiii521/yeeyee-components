const path = require('path');

const BasePath = {
  YEEYEE_COMPONENTS: path.resolve(
    __dirname,
    '..',
    'components',
    'src',
    'components'
  ),
  APP: path.resolve(__dirname, '..', 'app', 'index.js'),
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

const app = {
  app: ['@babel/polyfill', path.resolve(BasePath.APP)],
};

module.exports = { app, components };
