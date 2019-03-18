import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import { defaultButtonStyle } from './Button.style';
import { rippleRenderCss, renderRipple } from '../../animations';

class Button extends YeeYeeComponent {
  constructor() {
    super(defaultButtonStyle + rippleRenderCss);
  }

  protected connectedCallback() {
    this.render();
  }

  protected update(name: string, newValue: string, oldValue: string) {}

  protected getTemplateResult(): TemplateResult {
    return html`
      <button @click=${(e: MouseEvent) => this.onClick(e)}>
        <slot>NO LABEL</slot>
      </button>
    `;
  }

  private onClick(e: MouseEvent): void {
    const domElement = this.shadowRoot.querySelector('button');

    renderRipple(e.clientX, e.clientY, domElement);
  }
}

window.customElements.define('yeeyee-button', Button);

export default Button;
