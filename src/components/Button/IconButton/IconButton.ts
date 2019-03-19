import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../../YeeYeeComponent';
import { defaultIconButtonStyle } from './IconButton.style';
import { rippleCss } from '../../../animations/index';

class IconButton extends YeeYeeComponent {
  static NAME: string = 'name';
  static COLOR: string = 'color';

  static get observedAttributes() {
    return [IconButton.COLOR, IconButton.NAME];
  }

  constructor() {
    super(defaultIconButtonStyle + rippleCss);
  }

  protected connectedCallback() {
    this.render();
  }

  protected update(name: string, newValue: string): void {
    if (name === IconButton.NAME && newValue !== null) {
      this.render();
    } else if (name === IconButton.COLOR && newValue !== null) {
      this.render();
    }
  }

  protected connected(): void {}

  protected getTemplateResult(): TemplateResult {
    const name: string = this.get(IconButton.NAME);
    const color = this.get(IconButton.COLOR);

    return html`
      <button class="ripple">
        <yeeyee-icon color=${color} name=${name}></yeeyee-icon>
      </button>
    `;
  }
}

window.customElements.define('yeeyee-icon-button', IconButton);

export default IconButton;
