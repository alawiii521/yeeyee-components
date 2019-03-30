import YeeYeeComponent from '../YeeYeeComponent/index';
import { html } from 'lit-html';
import DrawerItemStyle from './DrawerItem.style';

class DrawerItem extends YeeYeeComponent {
  protected render() {
    return html`
      <style>
        ${DrawerItemStyle.default}
      </style>
      <div>
        <slot></slot>
      </div>
    `;
  }

  protected connected() {
    this.litRender();
  }

  protected update(name: string, newValue: string, oldValue: string) {}
}

window.customElements.define('yeeyee-drawer-item', DrawerItem);

export default DrawerItem;
