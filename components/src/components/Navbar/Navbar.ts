import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent/index';
import navbarStyle from './Navbar.style';
import { ColorStyle } from '../../style/color.style';

class Navbar extends YeeYeeComponent {
	public static NAME: string = 'name';
	public static URL: string = 'url';
	public static OPEN: string = 'open';
	public static TYPE: string = 'type';

	public static Type = Object.freeze({
		TEMPORARY: 'temporary',
		PERSISTENT: 'persistent',
	});

	public static Events = Object.freeze({
		Open: 'yeeyee-open',
	});

	public static get observedAttributes(): string[] {
		return [Navbar.OPEN, Navbar.NAME, Navbar.URL, Navbar.TYPE];
	}

	protected connected(): void {
		window.document.body.style.margin = '0';
		this.litRender();
	}

	protected update(name: string): void {
		const renderOnAttributes = [Navbar.OPEN, Navbar.NAME, Navbar.URL, Navbar.TYPE];
		if (renderOnAttributes.includes(name)) {
			this.litRender();
		}
	}

	protected render(): TemplateResult {
		return html`
			<style>
				${navbarStyle.default}
				${navbarStyle.open(this.hasAttribute(Navbar.OPEN), this.get(Navbar.TYPE))}
			</style>
			<nav>
				${this.createMenuButton()} ${this.createName()}
				<yeeyee-drawer ?open=${this.hasAttribute(Navbar.OPEN)}>
					<slot></slot>
				</yeeyee-drawer>
				<div class="action-bar">
					<slot name="action-bar"></slot>
				</div>
				${this.createOverlay()}
			</nav>
		`;
	}

	private handleOverlayClick(): void {
		this.handleClose();
	}

	private createName(): TemplateResult {
		const name: string = this.get(Navbar.NAME);
		const url: string = this.get(Navbar.URL);
		if (!name) {
			return html``;
		}

		return html`
			<a href=${url || ''}>${name}</a>
		`;
	}

	private createMenuButton(): TemplateResult {
		return html`
			<yeeyee-icon-button
				name="menu"
				color=${ColorStyle.white}
				@click=${(): void => this.handleMenuClick()}
			></yeeyee-icon-button>
		`;
	}

	private createOverlay(): TemplateResult {
		const type: string = this.get(Navbar.TYPE);
		if (type === Navbar.Type.PERSISTENT) {
			return html``;
		}

		return html`
			<yeeyee-overlay
				?open=${this.hasAttribute(Navbar.OPEN)}
				@close=${(): void => this.handleOverlayClick()}
			></yeeyee-overlay>
		`;
	}

	private handleMenuClick(): void {
		const open: boolean = this.hasAttribute(Navbar.OPEN);

		if (open) {
			this.handleClose();
		} else {
			this.handleOpen();
		}
	}

	private handleOpen(): void {
		this.setAttribute(Navbar.OPEN, '');
		this.emit(Navbar.Events.Open, { open: true });
	}

	private handleClose(): void {
		this.removeAttribute(Navbar.OPEN);
		this.emit(Navbar.Events.Open, { open: false });
	}
}

window.customElements.define('yeeyee-navbar', Navbar);

export default Navbar;
