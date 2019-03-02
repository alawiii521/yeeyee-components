import { TemplateResult, render, html } from 'lit-html';

abstract class YeeYeeComponent extends HTMLElement {
  yeeStyle: string;

  constructor(yeeStyle?: string) {
    super();

    this.yeeStyle = yeeStyle;
    this.attachShadow({ mode: 'open' });

    const litTemplate = this.render();

    this.litRender(litTemplate);
  }

  private litRender(litTemplate: TemplateResult) {
    const template = html`
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
