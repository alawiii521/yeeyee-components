import YeeYeeComponent from '../YeeYeeComponent/index';
import { html } from 'lit-html';
import DrawerItemStyle from './DrawerItem.style';

class DrawerItem extends YeeYeeComponent {
  static DESTINATION = 'destination';

  static get observedAttributes() {
    return [DrawerItem.DESTINATION];
  }

  protected getTemplateResult() {
    return html`
      <style>
        ${DrawerItemStyle.default}
      </style>
      <a href=${this.get(DrawerItem.DESTINATION)}>
        <slot></slot>
      </a>
    `;
  }

  protected connected() {
    this.render();
  }

  protected update(name: string, newValue: string, oldValue: string) {
    if (name === DrawerItem.DESTINATION) {
      this.render();
    }
  }
}

window.customElements.define('yeeyee-drawer-item', DrawerItem);

export default DrawerItem;
