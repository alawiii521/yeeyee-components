import { html, render } from 'lit-html';

class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const litTemplate = html`
      <button>Hello YeeYee</button>
    `;

    render(litTemplate, this.shadowRoot);
  }
}

window.customElements.define('yeeyee-button', Button);

export default Button;
