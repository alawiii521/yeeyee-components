const fs = require('fs');
const chalk = require('chalk');
const { promisify } = require('util');
const ComponentTemplates = require('./ComponentTemplates');
const AppTemplates = require('./AppTemplates');

const writeFile = promisify(fs.writeFile);

const COMPONENTS_PATH = './components/src/components';
const APP_DOC_PATH = './app/pages/doc';
const APP_DOC_CONTENT_PATH = `${APP_DOC_PATH}/content`;
const APP_DOC_COMPONENT_PATH = './app/src/pages/doc';

async function createFiles(componentName){
	await createComponentsFiles(componentName);
	await createAppFiles(componentName);
}

async function createComponentsFiles(componentName) {
	const directory = `${COMPONENTS_PATH}/${componentName}`;
	fs.mkdirSync(directory);

	try {
		const tsComponentFile = `${directory}/${componentName}.ts`;
		await writeFile(tsComponentFile, ComponentTemplates.component(componentName));
		console.log(chalk.green(`created: ${tsComponentFile}`));

	
		const tsIndexFile = `${directory}/index.ts`;
		await writeFile(tsIndexFile, ComponentTemplates.index(componentName));
		console.log(chalk.green(`created: ${tsIndexFile}`));

		const tsStyleFile = `${directory}/${componentName}.style.ts`;
		await writeFile(tsStyleFile, ComponentTemplates.style);
		console.log(chalk.green(`created: ${tsStyleFile}`));

	} catch(error){
		console.error(error);
	}

}

async function createAppFiles(componentName) {
	try {
		const directory = `${APP_DOC_COMPONENT_PATH}/${componentName}Doc`;
		fs.mkdirSync(directory);

		const appComponentFile = `${APP_DOC_COMPONENT_PATH}/${componentName}Doc/${componentName}Doc.jsx`;
		await writeFile(appComponentFile, AppTemplates.component(componentName));
		console.log(chalk.green(`created: ${appComponentFile}`));

		const appComponentContentFile = `${APP_DOC_COMPONENT_PATH}/${componentName}Doc/${componentName}DocContent.jsx`;
		await writeFile(appComponentContentFile, AppTemplates.componentContent(componentName));
		console.log(chalk.green(`created: ${appComponentContentFile}`));

		const appComponentIndexFile = `${APP_DOC_COMPONENT_PATH}/${componentName}Doc/index.js`;
		await writeFile(appComponentIndexFile, AppTemplates.componentIndex(componentName));
		console.log(chalk.green(`created: ${appComponentIndexFile}`));

		const appDocFile = `${APP_DOC_PATH}/${componentName.toLowerCase()}.js`;
		await writeFile(appDocFile, AppTemplates.doc(componentName));
		console.log(chalk.green(`created: ${appDocFile}`));

		const appDocContentFile = `${APP_DOC_CONTENT_PATH}/${componentName.toLowerCase()}.js`;
		await writeFile(appDocContentFile, AppTemplates.docContent(componentName));
		console.log(chalk.green(`created: ${appDocContentFile}`));
	} catch(error) {
		console.error(error);
	}
}

module.exports = createFiles;