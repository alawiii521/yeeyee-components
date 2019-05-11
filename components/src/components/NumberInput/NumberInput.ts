import YeeYeeComponent from '../YeeYeeComponent';
import { TemplateResult, html } from 'lit-html';

class NumberInput extends YeeYeeComponent {
	public static VALUE = 'value';

	public static get observedAttributes(): string[] {
		return [NumberInput.VALUE];
	}

	protected render(): TemplateResult {
		return html`
			<input type="number" value=${this.getAttribute(NumberInput.VALUE)} />
		`;
	}
	protected update(name: string): void {
		if (name === NumberInput.VALUE) {
			this.litRender();
		}
	}

	protected connected(): void {
		this.litRender();
	}
}

window.customElements.define('yeeyee-number-input', NumberInput);

export default NumberInput;
