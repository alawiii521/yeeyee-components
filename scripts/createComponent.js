const chalk = require('chalk');
const readline = require('readline');
const fs = require('fs');
const componentNames = require('../components/src/constants/componentNames');

const COMPONENTS_PATH = '../components/src/components';

const COMPONENT_NAME_QUESTION =
  'What is the name of the component that you whant to create? ';

const readlineInterface = readline.createInterface(
	process.stdin,
	process.stdout
);

readlineInterface.setPrompt(chalk.blue(COMPONENT_NAME_QUESTION));
readlineInterface.prompt();

readlineInterface
	.on('line', name => {
		const result = validateComponentName(name);

		if (result.valid) {
			createComponentDirectory;
			console.log(chalk.green('Success!!!'));
		} else {
			console.log(chalk.red(result.message));
		}
		readlineInterface.prompt();
	})
	.on('close', () => {
		console.log('Bye!!!');
		process.exit(0);
	});

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

function createComponentDirectory(componentName) {
	const directory = `${COMPONENTS_PATH}/${componentName}`;
	fs.mkdirSync(directory);
}
