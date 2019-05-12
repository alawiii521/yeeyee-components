import { TemplateResult, html } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';

class Switch extends YeeYeeComponent {
	protected render(): TemplateResult {
		return html`
			<button>AAA</button>
		`;
	}
	protected update(): void {}
	protected connected(): void {
		this.litRender();
	}
}

window.customElements.define('yeeyee-switch', Switch);

export default Switch;
