import YeeYeeComponent from '../YeeYeeComponent';
import { TemplateResult, html } from 'lit-html';
import NumberInputStyle from './NumberInput.style';

class NumberInput extends YeeYeeComponent {
	public static VALUE = 'value';
	public static LABEL = 'label';
	private input: HTMLInputElement = null;
	private label: HTMLLabelElement = null;

	public static get observedAttributes(): string[] {
		return [NumberInput.VALUE, NumberInput.LABEL];
	}

	protected render(): TemplateResult {
		return html`
			<style>
				${NumberInputStyle.default}
			</style>

			<label
				>${this.getAttribute(NumberInput.LABEL)}

				<input
					type="number"
					@change=${(e: Event): void => this.handleChange(e)}
					@input=${(e: Event): void => this.handleInput(e)}
					@blur=${(): void => this.handleBlur()}
					@focus=${(): void => this.handleFocus()}
				/>
			</label>
		`;
	}

	protected update(name: string): void {
		if (name === NumberInput.LABEL) {
			this.litRender();
		}
	}

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

	private handleFocus(): void {
		this.getLabel().classList.add('focus');
	}

	private handleBlur(): void {
		this.getLabel().classList.remove('focus');
	}

	public getInput(): HTMLInputElement {
		if (!this.input) {
			this.input = this.shadowRoot.querySelector('input');
		}

		return this.input;
	}

	public getLabel(): HTMLLabelElement {
		if (!this.label) {
			this.label = this.shadowRoot.querySelector('label');
		}

		return this.label;
	}
}

window.customElements.define('yeeyee-number-input', NumberInput);

export default NumberInput;
