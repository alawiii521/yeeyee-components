import { TemplateResult, render } from 'lit-html';

abstract class YeeYeeComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    const litTemplate = this.render();
    render(litTemplate, this.shadowRoot);
  }

  protected abstract render(): TemplateResult;
}

export default YeeYeeComponent;
