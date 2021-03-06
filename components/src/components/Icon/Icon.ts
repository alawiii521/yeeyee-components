import { html, TemplateResult } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import YeeYeeComponent from '../YeeYeeComponent/index';
import { ICON_PATH } from '../../constants/urls';
import iconStyle from './Icon.style';

class Icon extends YeeYeeComponent {
	public static NAME: string = 'name';
	public static COLOR: string = 'color';
	public static WIDTH: string = 'width';
	public static HEIGHT: string = 'height';

	public static get observedAttributes(): string[] {
		return [Icon.COLOR, Icon.NAME, Icon.WIDTH, Icon.HEIGHT];
	}

	private icon: HTMLTemplateElement = null;

	protected render(): TemplateResult {
		const icon = this.getIcon();
		return icon
			? html`
					<style>
						${iconStyle.default}
					</style>
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
				this.litRender();
			} else if (name === Icon.WIDTH) {
				this.setWidth(newValue);
				this.litRender();
			} else if (name === Icon.HEIGHT) {
				this.setHeight(newValue);
				this.litRender();
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
		this.download(icon).then((icon): void => {
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
				this.litRender();
			} else {
				throw 'no icon was downloaded';
			}
		});
	}

	private async download(iconName: string): Promise<string> {
		const res = await fetch(`${ICON_PATH}/${iconName}.svg`);
		if (res.ok) {
			const icon = await res.text();
			return icon;
		} else {
			throw res;
		}
	}
}

window.customElements.define('yeeyee-icon', Icon);

export default Icon;
