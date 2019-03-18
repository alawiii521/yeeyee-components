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

  protected attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    this.update(name, newValue, oldValue);
  }

  protected emit(name: string, detail: object): void {
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true }));
  }

  protected abstract getTemplateResult(): TemplateResult;

  protected abstract update(
    name: string,
    newValue: string,
    oldValue?: string
  ): void;
}

export default YeeYeeComponent;
