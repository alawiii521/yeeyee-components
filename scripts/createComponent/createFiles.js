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
const COMPONENT_ENTRIES_PATH = './components/src/constants/ComponentNames.js';
const APP_DOC_URL_PATH = './app/src/constants/DocUrls.js';

async function createFiles(componentName){
	await addComponentEntry(componentName);
	await addAppDocUrls(componentName);
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

async function addComponentEntry(componentName){
	const componentEntriesText = fs.readFileSync(COMPONENT_ENTRIES_PATH).toString('utf-8');
	
	const newComponentPropertyString = ',\n\t' + `${componentName}: '${componentName}',\n}`;
	const newComponentEntriesText = componentEntriesText.replace(/,(\n|\r)}/, newComponentPropertyString);
	await writeFile(COMPONENT_ENTRIES_PATH, newComponentEntriesText);

	console.log(chalk.green('added:', componentName, 'to', COMPONENT_ENTRIES_PATH));
}

async function addAppDocUrls(componentName){
	const appDocUrlText = fs.readFileSync(APP_DOC_URL_PATH).toString('utf-8');

	const newAppDocNameString = 
	`const ${camelToSnake(componentName)}_NAME = '/${camelToKebab(componentName)}';\n`;
	let newAppDocUrlText = appDocUrlText.replace(/\/\/ component names(\r|\n)/, newAppDocNameString);

	const newAppDocContentString = 
	`Content: {\n\t\t${camelToSnake(componentName)}_CONTENT_PATH: \`\${DOC_PATH}\${CONTENT_PATH}\${${camelToSnake(componentName)}_NAME}\`,\n`;
	newAppDocUrlText = newAppDocUrlText.replace(/Content: {(\r|\n)/, newAppDocContentString);


	const newAppDocMainString = `Main: {\n\t\t${camelToSnake(componentName)}_PATH: \`\${DOC_PATH}\${${camelToSnake(componentName)}_NAME}\`,\n`;
	newAppDocUrlText = newAppDocUrlText.replace(/Main: {(\r|\n)/, newAppDocMainString);

	await writeFile(APP_DOC_URL_PATH, newAppDocUrlText);

	console.log(chalk.green('added:', componentName, 'to', APP_DOC_URL_PATH));
}

function camelToSnake(str){
	return str.split(/(?=[A-Z])/).join('_').toUpperCase();
}

function camelToKebab(str){
	return str.split(/(?=[A-Z])/).join('-').toLowerCase();
}

module.exports = createFiles;