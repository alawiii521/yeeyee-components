const path = require('path');
const ComponentNames = require('../src/constants/componentNames');

const BasePath = {
	YEEYEE_COMPONENTS: path.resolve(__dirname, '..', 'src', 'components'),
};

const components = {
	'yeeyee-button': path.resolve(BasePath.YEEYEE_COMPONENTS, ComponentNames.Button),
	'yeeyee-navbar': path.resolve(BasePath.YEEYEE_COMPONENTS, ComponentNames.Navbar),
	'yeeyee-icon': path.resolve(BasePath.YEEYEE_COMPONENTS, ComponentNames.Icon),
	'yeeyee-button-icon': path.resolve(BasePath.YEEYEE_COMPONENTS, ComponentNames.IconButton),
	'yeeyee-drawer': path.resolve(BasePath.YEEYEE_COMPONENTS, ComponentNames.Drawer),
	'yeeyee-overlay': path.resolve(BasePath.YEEYEE_COMPONENTS, ComponentNames.Overlay),
	'yeeyee-drawer-item': path.resolve(BasePath.YEEYEE_COMPONENTS, ComponentNames.DrawerItem),
	'yeeyee-number-input': path.resolve(BasePath.YEEYEE_COMPONENTS, ComponentNames.NumberInput),
	'yeeyee-number-switch': path.resolve(BasePath.YEEYEE_COMPONENTS, ComponentNames.Switch),
};

module.exports = { components };
