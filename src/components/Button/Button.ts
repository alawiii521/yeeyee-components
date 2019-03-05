import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import {
  defaultButtonStyle,
  ripple,
  rippleDurationMilli,
} from './Button.style.ts';

class Button extends YeeYeeComponent {
  constructor() {
    super(defaultButtonStyle + ripple);
  }

  protected render(): TemplateResult {
    return html`
      <button class="rippleContainer" @click=${this.onClick}>
        <slot>NO LABEL</slot>
      </button>
    `;
  }

  private onClick(e: MouseEvent): void {
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const rect = this.getBoundingClientRect();

    const circle = document.createElement('div');

    circle.style.width = circle.style.height = diameter + 'px';
    circle.style.left = e.clientX - rect.left - diameter / 2 + 'px';
    circle.style.top = e.clientY - rect.top - diameter / 2 + 'px';

    circle.classList.add('ripple');

    this.appendChild(circle);

    setTimeout(() => {
      this.removeChild(circle);
    }, rippleDurationMilli);
  }
}

window.customElements.define('yeeyee-button', Button);

export default Button;
