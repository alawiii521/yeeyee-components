import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import iconButtonStyle from './IconButton.style';
import { rippleCss } from '../../animations/index';

class IconButton extends YeeYeeComponent {
  static NAME: string = 'name';
  static COLOR: string = 'color';

  static get observedAttributes() {
    return [IconButton.COLOR, IconButton.NAME];
  }

  protected connectedCallback() {
    this.litRender();
  }

  protected update(name: string, newValue: string): void {
    if (name === IconButton.NAME && newValue !== null) {
      this.litRender();
    } else if (name === IconButton.COLOR && newValue !== null) {
      this.litRender();
    }
  }

  protected connected(): void {}

  protected getTemplateResult(): TemplateResult {
    const name: string = this.get(IconButton.NAME);
    const color = this.get(IconButton.COLOR);

    return html`
      <style>
        ${iconButtonStyle.default}
        ${rippleCss}
      </style>
      <button class="ripple">
        <yeeyee-icon color=${color} name=${name}></yeeyee-icon>
      </button>
    `;
  }
}

window.customElements.define('yeeyee-icon-button', IconButton);

export default IconButton;
