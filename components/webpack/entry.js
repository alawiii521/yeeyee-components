const path = require('path');
const ComponentNames = require('../src/constants/componentNames');

const BasePath = {
	YEEYEE_COMPONENTS: path.resolve(__dirname, '..', 'src', 'components'),
};

function camelToKebab(string) {
	return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

let components = {};

Object.values(ComponentNames).forEach(
	name => (components['yeeyee-' + camelToKebab(name)] = path.resolve(BasePath.YEEYEE_COMPONENTS, name))
);

module.exports = { components };
