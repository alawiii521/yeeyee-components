import YeeYeeComponent from '../YeeYeeComponent/index';
import { html, TemplateResult } from 'lit-html';
import drawerStyle from './Drawer.style';

class Drawer extends YeeYeeComponent {
	public static OPEN: string = 'open';
	public static ALIGN: string = 'align';
	public static OFFSET_TOP: string = 'offset-top';

	public static Align = Object.freeze({
		LEFT: 'left',
		RIGHT: 'right',
	});

	public static get observedAttributes(): string[] {
		return [Drawer.OPEN];
	}

	protected connected(): void {
		this.litRender();
	}

	protected render(): TemplateResult {
		return html`
			<style>
				${drawerStyle.default}
				${drawerStyle.align(this.get(Drawer.ALIGN))}
				${drawerStyle.open(this.hasAttribute(Drawer.OPEN), this.get(Drawer.ALIGN))}
				${drawerStyle.offsetTop(this.get(Drawer.OFFSET_TOP))}
			</style>
			<div>
				<slot> </slot>
			</div>
		`;
	}

	protected update(name: string): void {
		if (name === Drawer.OPEN) {
			this.litRender();
		}
	}
}
window.customElements.get('yeeyee-drawer') || window.customElements.define('yeeyee-drawer', Drawer);

export default Drawer;
