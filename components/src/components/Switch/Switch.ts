import { TemplateResult, html } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import SwitchStyle from './Switch.style';

class Switch extends YeeYeeComponent {
	public static CHECKED = 'checked';

	private showRipple: boolean = false;
	private input: HTMLInputElement = null;

	public static get observedAttributes(): string[] {
		return [Switch.CHECKED];
	}

	protected render(): TemplateResult {
		return html`
			<style>
				${SwitchStyle.default}
			</style>
			<label class="switch">
				<input @input=${(e: Event): void => this.handleInput(e)} type="checkbox" />
				<span class="slider"></span>
				<span class="lever"></span>
				${this.showRipple
					? html`
							<span class="ripple-effect-container">
								<span class="ripple-effect-item"> </span>
							</span>
					  `
					: ''}
			</label>
		`;
	}

	protected update(name: string): void {
		if (name === Switch.CHECKED) {
			this.getInput().checked = this.hasAttribute(Switch.CHECKED);

			if (this.getInput().checked) {
				this.startRippleAnimation();
			}
		}
	}

	protected connected(): void {
		this.litRender();

		this.getInput().checked = this.hasAttribute(Switch.CHECKED);
	}

	private handleInput(e: Event): void {
		this.emit('change', e);
		this.getInput().checked = this.hasAttribute(Switch.CHECKED);
	}

	private startRippleAnimation(): void {
		this.showRipple = true;
		this.litRender();
		setTimeout((): void => {
			this.showRipple = false;
			this.litRender();
		}, SwitchStyle.SWITC_RIPPLE_DURATION);
	}

	public getInput(): HTMLInputElement {
		if (!this.input) {
			this.input = this.shadowRoot.querySelector('input');
		}
		return this.input;
	}
}

window.customElements.define('yeeyee-switch', Switch);

export default Switch;
