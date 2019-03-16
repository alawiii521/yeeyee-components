import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../../YeeYeeComponent';
import { defaultIconButtonStyle } from './IconButton.style';
import { rippleCss } from '../../../animations/index';

const Attributes = Object.freeze({
  NAME: 'name',
  COLOR: 'color',
});

class IconButton extends YeeYeeComponent {
  constructor() {
    super(defaultIconButtonStyle + rippleCss);
  }

  static get observedAttributes() {
    return [Attributes.COLOR, Attributes.NAME];
  }

  protected connectedCallback() {
    this.render();
  }

  protected attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === Attributes.NAME && newValue !== null) {
      this.render();
    } else if (name === Attributes.COLOR && newValue !== null) {
      this.render();
    }
  }

  protected getTemplateResult(): TemplateResult {
    const name = this.getName();
    const color = this.getColor();

    return html`
      <button class="ripple">
        <yeeyee-icon color=${color} name=${name}></yeeyee-icon>
      </button>
    `;
  }

  private getName(): string {
    return this.getAttribute(Attributes.NAME);
  }

  private getColor(): string {
    return this.getAttribute(Attributes.COLOR);
  }
}

window.customElements.define('yeeyee-icon-button', IconButton);

export default IconButton;
