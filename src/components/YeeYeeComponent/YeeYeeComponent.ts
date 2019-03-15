import { TemplateResult, render, html } from 'lit-html';

abstract class YeeYeeComponent extends HTMLElement {
  yeeStyle: string;

  constructor(yeeStyle?: string) {
    super();

    this.yeeStyle = yeeStyle;
    this.attachShadow({ mode: 'open' });
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

  protected render(): void {
    const litTemplate: TemplateResult = this.getTemplateResult();

    if (litTemplate) {
      this.litRender(litTemplate);
    }
  }

  protected abstract getTemplateResult(): TemplateResult;
}

export default YeeYeeComponent;
