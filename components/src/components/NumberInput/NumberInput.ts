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

			<div>
				<label for="for-id">${this.getAttribute(NumberInput.LABEL)} </label>
				<input
					id="for-id"
					type="number"
					@change=${(e: Event): void => this.handleChange(e)}
					@input=${(e: Event): void => this.handleInput(e)}
					@blur=${(): void => this.handleBlur()}
					@focus=${(): void => this.handleFocus()}
				/>
			</div>
		`;
	}

	protected update(name: string, newValue: string): void {
		if (name === NumberInput.LABEL) {
			this.litRender();
		} else if (name === NumberInput.VALUE) {
			this.getInput().value = this.getAttribute(NumberInput.VALUE);

			if (newValue) {
				this.setActiveState(true);
			} else {
				this.setActiveState(false);
			}
		}
	}

	protected connected(): void {
		this.litRender();

		this.getInput().value = this.getAttribute(NumberInput.VALUE);

		if (!this.isValueEmpty()) {
			this.setActiveState(true);
		}
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
		this.setActiveState(true);
	}

	private handleBlur(): void {
		if (this.isValueEmpty()) {
			this.setActiveState(false);
		}
	}

	private setActiveState(state: boolean): void {
		if (state) {
			this.getLabel().classList.add('active');
		} else {
			this.getLabel().classList.remove('active');
		}
	}

	private isValueEmpty(): boolean {
		const value = this.getAttribute(NumberInput.VALUE);
		return value === 'NaN' || (!value && value !== '0');
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
