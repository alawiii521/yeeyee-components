import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent/index';
import { defaultNavbarStyle } from './Navbar.style';
import { colorStyle } from '../../style/color.style';

class Navbar extends YeeYeeComponent {
  static NAME: string = 'name';
  static URL: string = 'url';
  static OPEN: string = 'open';

  static get observedAttributes() {
    return [Navbar.OPEN];
  }

  constructor() {
    super(defaultNavbarStyle);

    window.document.body.style.margin = '0';
  }

  protected update(name: string, newValue: string, oldValue: string): void {
    if (name === Navbar.OPEN) {
      this.render();
    }
  }

  protected connectedCallback() {
    this.render();
  }

  protected getTemplateResult(): TemplateResult {
    return html`
      <nav>
        ${this.createMenuButton()} ${this.createName()}
        <yeeyee-drawer ?open=${this.hasAttribute(Navbar.OPEN)}>
          <slot></slot>
        </yeeyee-drawer>
        <div class="action-bar">
          <slot name="action-bar"></slot>
        </div>
        <yeeyee-overlay
          ?open=${this.hasAttribute(Navbar.OPEN)}
          @close=${() => this.handleOverlayClick()}
        ></yeeyee-overlay>
      </nav>
    `;
  }

  private handleOverlayClick() {
    this.removeAttribute(Navbar.OPEN);
  }

  private createName(): TemplateResult | string {
    const name: string = this.get(Navbar.NAME);
    const url: string = this.get(Navbar.URL);
    if (!name) {
      return '';
    }

    return html`
      <a href=${url || ''}>${name}</a>
    `;
  }

  protected connected(): void {}

  private createMenuButton(): TemplateResult {
    return html`
      <yeeyee-icon-button
        name="menu"
        color=${colorStyle.white}
        @click=${() => this.handleMenuClick()}
      ></yeeyee-icon-button>
    `;
  }

  private handleMenuClick(): void {
    this.setAttribute(Navbar.OPEN, '');
  }
}

window.customElements.define('yeeyee-navbar', Navbar);

export default Navbar;
