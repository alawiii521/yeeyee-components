import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import buttonStyle from './Button.style';
import { rippleRenderCss, renderRipple } from '../../animations';

class Button extends YeeYeeComponent {
  protected update(name: string, newValue: string, oldValue: string) {}

  protected connected(): void {
    this.litRender();
  }

  protected render(): TemplateResult {
    return html`
      <style>
        ${buttonStyle.default}
        ${rippleRenderCss}
      </style>
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
