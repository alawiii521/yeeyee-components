const chalk = require('chalk');
const readline = require('readline');


const validateComponentName = require('./validateComponentName');
const createFiles = require('./createFiles');

const COMPONENT_NAME_QUESTION =
  'What is the name of the component that you whant to create? ';

const readlineInterface = readline.createInterface(
	process.stdin,
	process.stdout
);

readlineInterface.setPrompt(chalk.blue(COMPONENT_NAME_QUESTION));
readlineInterface.prompt();

readlineInterface
	.on('line', async name => {
		const result = validateComponentName(name);

		if (result.valid) {
			await createFiles(name);
			console.log(chalk.green('Success!!!'));
		} else {
			console.log(chalk.red(result.message));
		}
		readlineInterface.prompt();
	})
	.on('close', () => {
		console.log('\nBye!!!');
		process.exit(0);
	});




