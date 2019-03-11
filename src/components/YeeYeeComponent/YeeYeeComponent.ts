import { TemplateResult, render, html } from 'lit-html';

abstract class YeeYeeComponent extends HTMLElement {
  yeeStyle: string;

  constructor(yeeStyle?: string) {
    super();

    this.yeeStyle = yeeStyle;
    this.attachShadow({ mode: 'open' });

    this.update();
  }

  private litRender(litTemplate: TemplateResult): void {
    const template: TemplateResult = html`
      ${this.getStyle(this.yeeStyle)} ${litTemplate}
    `;

    render(template, this.shadowRoot);
  }

  private getStyle(style: string): TemplateResult {
    return html`
      <style>
        ${style}
      </style>
    `;
  }

  protected update(): void {
    const litTemplate: TemplateResult = this.render();

    if (litTemplate) {
      this.litRender(litTemplate);
    }
  }

  protected abstract render(): TemplateResult;
}

export default YeeYeeComponent;
