import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import { defaultButtonStyle } from './Button.style.ts';

class Button extends YeeYeeComponent {
  constructor() {
    super(defaultButtonStyle);
  }

  protected render(): TemplateResult {
    return html`
      <button><slot>NO LABEL</slot></button>
    `;
  }
}

window.customElements.define('yeeyee-button', Button);

export default Button;
