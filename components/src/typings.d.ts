declare module 'lit-html' {
	export interface TemplateResult {
		strings: TemplateStringsArray;
		values: ReadonlyArray<unknown>;
		type: string;
	}
	export function html(strings: TemplateStringsArray, ...values: unknown[]): TemplateResult;
	export function render(result: TemplateResult, container: Element | DocumentFragment): TemplateResult;
}

declare module 'lit-html/directives/unsafe-html.js' {
	export function unsafeHTML(html: string): string;
}
