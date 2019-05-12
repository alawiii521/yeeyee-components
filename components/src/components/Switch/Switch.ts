import { TemplateResult, html } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import SwitchStyle from './Switch.style';

class Switch extends YeeYeeComponent {
	protected render(): TemplateResult {
		return html`
			<style>
				${SwitchStyle.default}
			</style>
			<label class="switch">
				<input type="checkbox" />
				<span class="slider"></span>
				<span class="lever"></span>
			</label>
		`;
	}
	protected update(): void {}

	protected connected(): void {
		this.litRender();
	}
}

window.customElements.define('yeeyee-switch', Switch);

export default Switch;
