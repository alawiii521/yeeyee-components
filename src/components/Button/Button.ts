import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';

class Button extends YeeYeeComponent {
  protected render(): TemplateResult {
    return html`
      <button>Hello From YeeYee</button>
    `;
  }
}

window.customElements.define('yeeyee-button', Button);

export default Button;
