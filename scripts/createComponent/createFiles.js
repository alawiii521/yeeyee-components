const fs = require('fs');
const chalk = require('chalk');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

const COMPONENTS_PATH = './components/src/components';

async function createFiles(componentName){
	await createComponentsFiles(componentName);
}

async function createComponentsFiles(componentName) {
	const directory = `${COMPONENTS_PATH}/${componentName}`;
	fs.mkdirSync(directory);

	try {
		const tsComponentFile = `${directory}/${componentName}.ts`;
		await writeFile(tsComponentFile, 'Heej');
		console.log(chalk.green(`created: ${tsComponentFile}`));

	
		const tsIndexFile = `${directory}/index.ts`;
		await writeFile(tsIndexFile, 'Heej');
		console.log(chalk.green(`created: ${tsIndexFile}`));

		const tsStyleFile = `${directory}/${componentName}.style.ts`;
		await writeFile(tsStyleFile, 'Heej');
		console.log(chalk.green(`created: ${tsStyleFile}`));

	} catch(error){
		console.error(error);
	}

}

module.exports = createFiles;