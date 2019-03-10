import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent/index';
import { defaultNavbarStyle } from './Navbar.style';

const attributes = {
  NAME: 'name',
  URL: 'url',
};

class Navbar extends YeeYeeComponent {
  constructor() {
    super(defaultNavbarStyle);

    window.document.body.style.margin = '0';
  }

  protected render(): TemplateResult {
    return html`
      <nav>
        ${this.renderName()}
      </nav>
    `;
  }

  private renderName(): TemplateResult | string {
    const name: string = this.getAttribute(attributes.NAME);
    const url: string = this.getAttribute(attributes.URL);
    if (!name) {
      return '';
    }

    return html`
      <a href=${url || ''}>${name}</a>
    `;
  }
}

window.customElements.define('yeeyee-navbar', Navbar);

export default Navbar;
