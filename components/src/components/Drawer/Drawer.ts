import YeeYeeComponent from '../YeeYeeComponent/index';
import { html, TemplateResult } from 'lit-html';
import drawerStyle from './Drawer.style';

class Drawer extends YeeYeeComponent {
	public static OPEN: string = 'open';
	public static ALIGNMENT: string = 'alignment';
	public static OFFSET_TOP: string = 'offset-top';

	public static Alignment = Object.freeze({
		LEFT: 'left',
		RIGHT: 'right',
	});

	public static get observedAttributes(): string[] {
		return [Drawer.OPEN, Drawer.ALIGNMENT, Drawer.OFFSET_TOP];
	}

	protected connected(): void {
		this.litRender();
	}

	protected render(): TemplateResult {
		return html`
			<style>
				${drawerStyle.default}
				${drawerStyle.alignment(this.get(Drawer.ALIGNMENT))}
				${drawerStyle.open(this.hasAttribute(Drawer.OPEN), this.get(Drawer.ALIGNMENT))}
				${drawerStyle.offsetTop(this.get(Drawer.OFFSET_TOP))}
			</style>
			<div>
				<slot> </slot>
			</div>
		`;
	}

	protected update(name: string): void {
		if ([Drawer.OPEN, Drawer.ALIGNMENT].includes(name)) {
			this.litRender();
		}
	}
}
window.customElements.get('yeeyee-drawer') || window.customElements.define('yeeyee-drawer', Drawer);

export default Drawer;
