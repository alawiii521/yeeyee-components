const fs = require('fs');
const chalk = require('chalk');
const { promisify } = require('util');
const ComponentTemplates = require('./ComponentTemplates');
const AppTemplates = require('./AppTemplates');
const StringUtility = require('./StringUtility');

const writeFile = promisify(fs.writeFile);

const COMPONENTS_PATH = './components/src/components';
const APP_DOC_PATH = './app/pages/doc';
const APP_DOC_DOCUMENT_PATH = './app/pages/_document.js';
const APP_DOC_CONTENT_PATH = `${APP_DOC_PATH}/content`;
const APP_DOC_COMPONENT_PATH = './app/src/pages/doc';
const COMPONENT_ENTRIES_PATH = './components/src/constants/ComponentNames.js';
const APP_DOC_URL_PATH = './app/src/constants/DocUrls.js';
const APP_NAVIGATION_PATH = './app/src/components/DocPage/Navigation/NavigationList.js';

async function createFiles(componentName){
	await addComponentInApp(componentName);
	await addComponentEntry(componentName);
	await addAppDocUrls(componentName);
	await addAppNavigationItem(componentName);
	await createComponentsFiles(componentName);
	await createAppFiles(componentName);
}

async function createComponentsFiles(componentName) {
	const directory = `${COMPONENTS_PATH}/${componentName}`;
	fs.mkdirSync(directory);

	const tsComponentFile = `${directory}/${componentName}.ts`;
	await writeFile(tsComponentFile, ComponentTemplates.component(componentName));
	console.log(chalk.green(`created: ${tsComponentFile}`));

	
	const tsIndexFile = `${directory}/index.ts`;
	await writeFile(tsIndexFile, ComponentTemplates.index(componentName));
	console.log(chalk.green(`created: ${tsIndexFile}`));

	const tsStyleFile = `${directory}/${componentName}.style.ts`;
	await writeFile(tsStyleFile, ComponentTemplates.style);
	console.log(chalk.green(`created: ${tsStyleFile}`));
}

async function createAppFiles(componentName) {
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

	const appDocFile = `${APP_DOC_PATH}/${StringUtility.camelToKebab(componentName)}.js`;
	await writeFile(appDocFile, AppTemplates.doc(componentName));
	console.log(chalk.green(`created: ${appDocFile}`));

	const appDocContentFile = `${APP_DOC_CONTENT_PATH}/${StringUtility.camelToKebab(componentName)}.js`;
	await writeFile(appDocContentFile, AppTemplates.docContent(componentName));
	console.log(chalk.green(`created: ${appDocContentFile}`));

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
	`// component names\nconst ${StringUtility.camelToSnake(componentName)}_NAME = '/${StringUtility.camelToKebab(componentName)}';\n`;
	let newAppDocUrlText = appDocUrlText.replace(/\/\/ component names(\r|\n)/, newAppDocNameString);

	const newAppDocContentString = 
	`Content: {\n\t\t${StringUtility.camelToSnake(componentName)}_CONTENT_PATH: \`\${DOC_PATH}\${CONTENT_PATH}\${${StringUtility.camelToSnake(componentName)}_NAME}\`,\n`;
	newAppDocUrlText = newAppDocUrlText.replace(/Content: {(\r|\n)/, newAppDocContentString);


	const newAppDocMainString = `Main: {\n\t\t${StringUtility.camelToSnake(componentName)}_PATH: \`\${DOC_PATH}\${${StringUtility.camelToSnake(componentName)}_NAME}\`,\n`;
	newAppDocUrlText = newAppDocUrlText.replace(/Main: {(\r|\n)/, newAppDocMainString);

	await writeFile(APP_DOC_URL_PATH, newAppDocUrlText);

	console.log(chalk.green('added:', componentName, 'to', APP_DOC_URL_PATH));
}

async function addAppNavigationItem(componentName){
	const appNavigationList = fs.readFileSync(APP_NAVIGATION_PATH).toString('utf-8');
	const navigationListItem = `\t{ name: '${componentName}', navigateTo: DocUrls.Main.${StringUtility.camelToSnake(componentName)}_PATH },\n];`;
	const newAppNavigationList = appNavigationList.replace(/];/, navigationListItem);

	await writeFile(APP_NAVIGATION_PATH, newAppNavigationList);

	console.log(chalk.green('added navigation item:', componentName, 'to', APP_NAVIGATION_PATH));
}

async function addComponentInApp(componentName) {
	
	const documentString = fs.readFileSync(APP_DOC_DOCUMENT_PATH).toString('utf-8');
	const compoentFilePath = 
	`{/* components */}\n\t\t\t\t\t<script src="/static/yeeyee-components/yeeyee-${StringUtility.camelToKebab(componentName)}.js" />`;
	const newDocumentString = documentString.replace(/{\/\* components \*\/}/, compoentFilePath);

	await writeFile(APP_DOC_DOCUMENT_PATH, newDocumentString);
	console.log(chalk.green('added compoent path:', componentName, 'to', APP_DOC_DOCUMENT_PATH));
}

module.exports = createFiles;