import { html, TemplateResult } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import YeeYeeComponent from '../YeeYeeComponent/index';
import { ICON_PATH } from '../../constants/urls';

const Attributes = Object.freeze({
  NAME: 'name',
  COLOR: 'color',
  WIDTH: 'width',
  HEIGHT: 'height',
});

class Icon extends YeeYeeComponent {
  static get observedAttributes() {
    return [
      Attributes.COLOR,
      Attributes.NAME,
      Attributes.WIDTH,
      Attributes.HEIGHT,
    ];
  }

  private icon: HTMLTemplateElement = null;

  protected getTemplateResult(): TemplateResult {
    const icon = this.getIcon();
    return icon
      ? html`
          ${unsafeHTML(icon.innerHTML)}
        `
      : null;
  }

  protected attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === Attributes.NAME) {
      this.create(newValue);
    } else if (this.getIcon() !== null) {
      if (name === Attributes.COLOR) {
        this.setColor(newValue);
        this.render();
      } else if (name === Attributes.WIDTH) {
        this.setWidth(newValue);
        this.render();
      } else if (name === Attributes.HEIGHT) {
        this.setHeight(newValue);
        this.render();
      }
    }
  }

  private setIcon(icon: HTMLTemplateElement): void {
    this.icon = icon;
  }

  private getIcon(): HTMLTemplateElement {
    return this.icon;
  }

  private setHeight(height: string): void {
    this.getIcon().content.firstElementChild.setAttribute('height', height);
  }

  private getHeight(): string {
    return this.getAttribute('height');
  }

  private setWidth(width: string): void {
    this.getIcon().content.firstElementChild.setAttribute('width', width);
  }

  private getWidth(): string {
    return this.getAttribute(Attributes.WIDTH);
  }

  private setColor(color: string): void {
    this.getIcon().content.firstElementChild.setAttribute('fill', color);
  }

  private getColor(): string {
    return this.getAttribute(Attributes.COLOR);
  }

  private create(icon: string): void {
    this.download(icon).then(icon => {
      if (icon) {
        const template = document.createElement('template');
        template.innerHTML = icon;
        this.setIcon(template);

        const color = this.getColor();
        const width = this.getWidth();
        const height = this.getHeight();

        this.setColor(color);

        if (width) {
          this.setWidth(width);
        }

        if (height) {
          this.setHeight(height);
        }
        this.render();
      } else {
        console.error('no icon was downloaded');
      }
    });
  }

  private async download(iconName: string): Promise<string> {
    try {
      const res = await fetch(`${ICON_PATH}/${iconName}.svg`);
      if (res.ok) {
        const icon = await res.text();
        return icon;
      } else {
        console.error(res);
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

window.customElements.define('yeeyee-icon', Icon);

export default Icon;
