import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import IconButtonStyle from './IconButton.style';
import { rippleCss } from '../../animations/index';

class IconButton extends YeeYeeComponent {
	public static NAME: string = 'name';
	public static COLOR: string = 'color';
	public static TYPE: string = 'type';
	public static FLOATING: string = 'floating';

	public static get observedAttributes(): string[] {
		return [IconButton.COLOR, IconButton.NAME];
	}

	protected update(name: string, newValue: string): void {
		if (name === IconButton.NAME && newValue !== null) {
			this.litRender();
		} else if (name === IconButton.COLOR && newValue !== null) {
			this.litRender();
		}
	}

	protected connected(): void {
		this.litRender();
	}

	protected render(): TemplateResult {
		const name: string = this.get(IconButton.NAME);
		const color = this.get(IconButton.COLOR);

		return html`
			<style>
				${IconButtonStyle.default}
				${IconButtonStyle.type(this.get(IconButton.TYPE))}
				${IconButtonStyle.floating(this.hasAttribute(IconButton.FLOATING))}
				${rippleCss}
			</style>
			<button class="ripple">
				<yeeyee-icon color=${color} name=${name}></yeeyee-icon>
			</button>
		`;
	}
}

window.customElements.define('yeeyee-icon-button', IconButton);

export default IconButton;
