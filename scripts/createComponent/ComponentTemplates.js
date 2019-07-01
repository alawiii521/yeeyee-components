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
			<div>Hello ${componentName}!!!</div>
		\`;
	}
}

window.customElements.define('yeeyee-${componentName.toLowerCase()}', ${componentName});

export default ${componentName};
`;

module.exports = {
	index,
	style,
	component,
};