import YeeYeeComponent from '../YeeYeeComponent/index';
import { html, TemplateResult } from 'lit-html';
import drawerStyle from './Drawer.style';

class Drawer extends YeeYeeComponent {
  static OPEN: string = 'open';
  static ALIGN: string = 'align';

  static Align = Object.freeze({
    LEFT: 'left',
    RIGHT: 'right',
  });

  static get observedAttributes() {
    return [Drawer.OPEN];
  }

  protected connected() {
    this.litRender();
  }

  protected render(): TemplateResult {
    return html`
      <style>
        ${drawerStyle.default}
        ${drawerStyle.align(this.get(Drawer.ALIGN))}
        ${drawerStyle.open(
          this.hasAttribute(Drawer.OPEN),
          this.get(Drawer.ALIGN)
        )}
      </style>
      <div>
        <slot> </slot>
      </div>
    `;
  }

  protected update(name: string, newValue: string, oldValue: string) {
    if (name === Drawer.OPEN) {
      this.litRender();
    }
  }
}
window.customElements.get('yeeyee-drawer') ||
  window.customElements.define('yeeyee-drawer', Drawer);

export default Drawer;
