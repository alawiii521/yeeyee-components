import { TemplateResult, html } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import SwitchStyle from './Switch.style';

class Switch extends YeeYeeComponent {
	private showRipple: boolean = false;

	protected render(): TemplateResult {
		return html`
			<style>
				${SwitchStyle.default}
			</style>
			<label class="switch">
				<input type="checkbox" />
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
	protected update(): void {}

	protected connected(): void {
		this.litRender();
		this.shadowRoot.querySelector('input').addEventListener('input', (e: Event): void => this.handleClick(e));
	}

	private handleClick(e: Event): void {
		const target = e.target as HTMLInputElement;

		if (target.checked) {
			this.showRipple = true;
			this.litRender();
			setTimeout((): void => {
				this.showRipple = false;
				this.litRender();
			}, SwitchStyle.SWITC_RIPPLE_DURATION);
		}
	}
}

window.customElements.define('yeeyee-switch', Switch);

export default Switch;
