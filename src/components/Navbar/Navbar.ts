import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent/index';
import navbarStyle from './Navbar.style';
import { colorStyle } from '../../style/color.style';

class Navbar extends YeeYeeComponent {
  static NAME: string = 'name';
  static URL: string = 'url';
  static OPEN: string = 'open';

  static get observedAttributes() {
    return [Navbar.OPEN];
  }

  protected update(name: string, newValue: string, oldValue: string): void {
    if (name === Navbar.OPEN) {
      this.litRender();
    }
  }

  protected getTemplateResult(): TemplateResult {
    return html`
      <style>
        ${navbarStyle.default}
      </style>
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

  protected connected(): void {
    window.document.body.style.margin = '0';
    this.litRender();
  }

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
