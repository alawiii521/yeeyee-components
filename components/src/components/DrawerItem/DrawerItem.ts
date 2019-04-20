import YeeYeeComponent from '../YeeYeeComponent/index';
import { html, TemplateResult } from 'lit-html';
import DrawerItemStyle from './DrawerItem.style';

class DrawerItem extends YeeYeeComponent {
	protected render(): TemplateResult {
		return html`
			<style>
				${DrawerItemStyle.default}
			</style>
			<div>
				<slot></slot>
			</div>
		`;
	}

	protected connected(): void {
		this.litRender();
	}

	protected update(): void {}
}

window.customElements.define('yeeyee-drawer-item', DrawerItem);

export default DrawerItem;
