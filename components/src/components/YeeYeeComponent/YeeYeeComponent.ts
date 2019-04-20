import { TemplateResult, render } from 'lit-html';

abstract class YeeYeeComponent extends HTMLElement {
	public constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}

	protected litRender(): void {
		const litTemplate: TemplateResult = this.render();
		if (litTemplate) {
			render(litTemplate, this.shadowRoot);
		}
	}

	protected connectedCallback(): void {
		this.connected();
	}

	protected attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
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

	protected abstract render(): TemplateResult;

	protected abstract update(name: string, newValue: string, oldValue?: string): void;

	protected abstract connected(): void;
}

export default YeeYeeComponent;
