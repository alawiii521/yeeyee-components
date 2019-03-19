import { html, TemplateResult } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import YeeYeeComponent from '../YeeYeeComponent/index';
import { ICON_PATH } from '../../constants/urls';
import { defaultIconStyle } from './Icon.style';

class Icon extends YeeYeeComponent {
  static NAME: string = 'name';
  static COLOR: string = 'color';
  static WIDTH: string = 'width';
  static HEIGHT: string = 'height';

  static get observedAttributes() {
    return [Icon.COLOR, Icon.NAME, Icon.WIDTH, Icon.HEIGHT];
  }

  constructor() {
    super(defaultIconStyle);
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

  protected update(name: string, newValue: string): void {
    if (name === Icon.NAME) {
      this.create(newValue);
    } else if (this.getIcon() !== null) {
      if (name === Icon.COLOR) {
        this.setColor(newValue);
        this.render();
      } else if (name === Icon.WIDTH) {
        this.setWidth(newValue);
        this.render();
      } else if (name === Icon.HEIGHT) {
        this.setHeight(newValue);
        this.render();
      }
    }
  }

  protected connected(): void {
    this.create(this.get(Icon.NAME));
  }

  private setIcon(icon: HTMLTemplateElement): void {
    this.icon = icon;
  }

  private getIcon(): HTMLTemplateElement {
    return this.icon;
  }

  private setHeight(height: string): void {
    this.getIcon().content.firstElementChild.setAttribute(Icon.HEIGHT, height);
  }

  private setWidth(width: string): void {
    this.getIcon().content.firstElementChild.setAttribute(Icon.WIDTH, width);
  }

  private setColor(color: string): void {
    this.getIcon().content.firstElementChild.setAttribute('fill', color);
  }

  private create(icon: string): void {
    this.download(icon).then(icon => {
      if (icon) {
        const template = document.createElement('template');
        template.innerHTML = icon;
        this.setIcon(template);

        const color = this.get(Icon.COLOR);
        const width = this.get(Icon.WIDTH);
        const height = this.get(Icon.HEIGHT);

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
