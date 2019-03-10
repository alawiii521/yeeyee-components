import { TemplateResult, render, html } from 'lit-html';

abstract class YeeYeeComponent extends HTMLElement {
  yeeStyle: string;

  constructor(yeeStyle?: string) {
    super();

    this.yeeStyle = yeeStyle;
    this.attachShadow({ mode: 'open' });

    const litTemplate: TemplateResult = this.render();

    if (litTemplate) {
      this.litRender(litTemplate);
    }
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
        ${this.yeeStyle}
      </style>
    `;
  }

  protected abstract render(): TemplateResult;
}

export default YeeYeeComponent;
