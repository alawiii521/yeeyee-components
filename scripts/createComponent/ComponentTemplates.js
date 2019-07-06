const StringUtility = require('./StringUtility');

const index = componentName =>  `export { default } from './${componentName}';
`;

const style = `import { css } from '../../style/utilsStyle';

const defaultStyle = css\`\`;

export default { default: defaultStyle };
`;

const component = componentName => `import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import ${componentName}Style from './${componentName}.style';

class ${componentName} extends YeeYeeComponent {
	protected update(): void {}

	protected connected(): void {
		this.litRender();
	}

	protected render(): TemplateResult {
		return html\`
			<style>
				\${${componentName}Style.default}
			</style>
			<h1>Hello ${componentName}!!!</h1>
		\`;
	}
}

window.customElements.define('yeeyee-${StringUtility.camelToKebab(componentName)}', ${componentName});

export default ${componentName};
`;

module.exports = {
	index,
	style,
	component,
};