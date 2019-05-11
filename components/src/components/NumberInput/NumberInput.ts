import YeeYeeComponent from '../YeeYeeComponent';
import { TemplateResult, html } from 'lit-html';

class NumberInput extends YeeYeeComponent {
	public static VALUE = 'value';
	private thisInput: HTMLInputElement = null;

	public static get observedAttributes(): string[] {
		return [NumberInput.VALUE];
	}

	protected render(): TemplateResult {
		return html`
			<input
				type="number"
				@change=${(e: Event): void => this.handleChange(e)}
				@input=${(e: Event): void => this.handleInput(e)}
			/>
		`;
	}

	protected update(): void {}

	protected connected(): void {
		this.litRender();

		this.getInput().value = this.getAttribute(NumberInput.VALUE);
	}

	private handleChange(e: Event): void {
		this.emit('change', e);
		this.getInput().value = this.getAttribute(NumberInput.VALUE);
	}

	private handleInput(e: Event): void {
		this.emit('yeeyee-input', e);
		this.getInput().value = this.getAttribute(NumberInput.VALUE);
	}

	public getInput(): HTMLInputElement {
		if (!this.thisInput) {
			this.thisInput = this.shadowRoot.querySelector('input');
		}

		return this.thisInput;
	}
}

window.customElements.define('yeeyee-number-input', NumberInput);

export default NumberInput;
