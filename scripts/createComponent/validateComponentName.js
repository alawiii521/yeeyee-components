const componentNames = require('../../components/src/constants/componentNames');

function validateComponentName(name) {
	if (!name) {
		return {
			valid: false,
			message: 'no name was entered!'
		};
	} else if (name[0] !== name[0].toUpperCase()) {
		return {
			valid: false,
			message: 'First character must be uppercase!'
		};
	} else if (name[0].toLowerCase() === name[0].toUpperCase()) {
		return {
			valid: false,
			message: 'First letter must a letter!'
		};
	} else if (name.length <= 2) {
		return {
			valid: false,
			message: 'The name must be more than 2 characters!'
		};
	} else if (!isComponentNameAvailable(name)) {
		return {
			valid: false,
			message: 'The name is already used!'
		};
	}

	return { valid: true };
}

function isComponentNameAvailable(name) {
	const componentNameList = Object.values(componentNames);
	return !componentNameList.some(item => item === name);
}

module.exports = validateComponentName;