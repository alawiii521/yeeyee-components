const StringUtility = require('./StringUtility');

const doc = componentName => `import ${componentName}Doc from '../../src/pages/doc/${componentName}Doc';

export default ${componentName}Doc;
`;

const docContent = componentName => `import ${componentName}DocContent from '../../../src/pages/doc/${componentName}Doc/${componentName}DocContent';

export default ${componentName}DocContent;
`;

const component = componentName => `import DocPage from '../../../components/DocPage/DocPage';
import DocUrls from '../../../constants/DocUrls';

function ${componentName}Doc() {
	return (
		<DocPage
			name="${componentName}"
			title="${componentName}"
			contentUrl={DocUrls.Content.${StringUtility.camelToSnake(componentName)}_CONTENT_PATH}
		/>
	);
}

export default ${componentName}Doc;
`;

const componentIndex = componentName => `export { default } from './${componentName}Doc';
`;

const componentContent = componentName => `import GlobalStyle from '../../../style/GlobalStyle';

function ${componentName}DocContent() {
	return (
		<div>
			<GlobalStyle />
			<yeeyee-${StringUtility.camelToKebab(componentName)} />
		</div>
	);
}

export default ${componentName}DocContent;
`;

module.exports = {
	doc,
	docContent,
	component,
	componentIndex,
	componentContent
};