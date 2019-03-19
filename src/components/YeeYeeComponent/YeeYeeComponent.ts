import { TemplateResult, render, html } from 'lit-html';

abstract class YeeYeeComponent extends HTMLElement {
  protected yeeStyle: string;

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

  protected connectedCallback(): void {
    this.connected();
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
    if (this.isConnected) {
      this.update(name, newValue, oldValue);
    }
  }

  protected get(name: string): string {
    return this.getAttribute(name);
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

  protected abstract connected(): void;
}

export default YeeYeeComponent;
