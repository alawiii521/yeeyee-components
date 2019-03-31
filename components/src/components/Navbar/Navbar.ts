import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent/index';
import navbarStyle from './Navbar.style';
import { colorStyle } from '../../style/color.style';

class Navbar extends YeeYeeComponent {
  static NAME: string = 'name';
  static URL: string = 'url';
  static OPEN: string = 'open';
  static TYPE: string = 'type';

  static Type = Object.freeze({
    TEMPORARY: 'temporary',
    PERSISTENT: 'persistent',
  });

  static get observedAttributes() {
    return [Navbar.OPEN];
  }

  protected connected(): void {
    window.document.body.style.margin = '0';
    this.litRender();
  }

  protected update(name: string, newValue: string, oldValue: string): void {
    if (name === Navbar.OPEN) {
      this.litRender();
    }
  }

  protected render(): TemplateResult {
    return html`
      <style>
        ${navbarStyle.default}
        ${navbarStyle.open(
          this.hasAttribute(Navbar.OPEN),
          this.get(Navbar.TYPE)
        )}
      </style>
      <nav>
        ${this.createMenuButton()} ${this.createName()}
        <yeeyee-drawer ?open=${this.hasAttribute(Navbar.OPEN)}>
          <slot></slot>
        </yeeyee-drawer>
        <div class="action-bar">
          <slot name="action-bar"></slot>
        </div>
        ${this.createOverlay()}
      </nav>
    `;
  }

  private handleOverlayClick() {
    this.removeAttribute(Navbar.OPEN);
  }

  private createName(): TemplateResult {
    const name: string = this.get(Navbar.NAME);
    const url: string = this.get(Navbar.URL);
    if (!name) {
      return html``;
    }

    return html`
      <a href=${url || ''}>${name}</a>
    `;
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

  private createOverlay(): TemplateResult {
    const type: string = this.get(Navbar.TYPE);
    if (type === Navbar.Type.PERSISTENT) {
      return html``;
    }

    return html`
      <yeeyee-overlay
        ?open=${this.hasAttribute(Navbar.OPEN)}
        @close=${() => this.handleOverlayClick()}
      ></yeeyee-overlay>
    `;
  }

  private handleMenuClick(): void {
    const open: boolean = this.hasAttribute(Navbar.OPEN);

    if (open) {
      this.removeAttribute(Navbar.OPEN);
    } else {
      this.setAttribute(Navbar.OPEN, '');
    }
  }
}

window.customElements.define('yeeyee-navbar', Navbar);

export default Navbar;
