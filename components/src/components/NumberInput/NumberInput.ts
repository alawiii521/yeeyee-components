import YeeYeeComponent from '../YeeYeeComponent';
import { TemplateResult, html } from 'lit-html';

class NumberInput extends YeeYeeComponent {
	protected render(): TemplateResult {
		return html`
			<h1>Number input!!!</h1>
		`;
	}
	protected update(): void {}

	protected connected(): void {
		this.litRender();
	}
}

window.customElements.define('yeeyee-number-input', NumberInput);

export default NumberInput;
