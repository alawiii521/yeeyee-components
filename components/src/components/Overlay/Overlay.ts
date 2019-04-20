import YeeYeeComponent from '../YeeYeeComponent/index';
import { html, TemplateResult } from 'lit-html';
import overlayStyle, { animationDuration } from './Overlay.style';
import fadeIn from '../../animations/fadeIn';
import fadeOut from '../../animations/fadeOut';

class Overlay extends YeeYeeComponent {
	public static OPEN: string = 'open';
	public static Event = Object.freeze({
		ANIMATION_END: 'animationend',
		CLOSE: 'close',
	});

	public static Animation = Object.freeze({
		OPEN: 'open',
		CLOSE: 'close',
	});

	private open: boolean = false;
	private currentAnimation: string = '';

	public static get observedAttributes(): string[] {
		return [Overlay.OPEN];
	}

	protected render(): TemplateResult {
		return html`
			<style>
				${overlayStyle.default}
				${fadeIn.style}
				${fadeOut.style}
				${overlayStyle.color()}
			</style>
			${this.open
				? html`
						<div class=${this.currentAnimation} @click=${(): void => this.handleOverlayClick()}></div>
				  `
				: ''}
		`;
	}

	private handleOverlayClick(): void {
		this.removeAttribute(Overlay.OPEN);
	}

	private handleClose(): void {
		this.setAnimation(fadeOut.name);
		this.litRender();
		this.emit(Overlay.Event.CLOSE, {});
		setTimeout((): void => this.onFadeOutEnd(), animationDuration);
	}

	private handleOpen(): void {
		this.open = true;
		this.fadeIn();
		this.litRender();
	}

	private fadeIn(): void {
		this.setAnimation(fadeIn.name);
		setTimeout((): void => this.onFadeInEnd(), animationDuration);
	}

	private setAnimation(name: string): void {
		this.currentAnimation = name;
	}

	private onFadeOutEnd(): void {
		this.open = false;
		this.litRender();
		this.emit(Overlay.Event.ANIMATION_END, { type: Overlay.Animation.CLOSE });
	}

	private onFadeInEnd(): void {
		this.emit(Overlay.Event.ANIMATION_END, { type: Overlay.Animation.OPEN });
	}

	protected connected(): void {
		if (this.hasAttribute(Overlay.OPEN)) {
			this.handleOpen();
		}
	}

	protected update(name: string): void {
		if (name === Overlay.OPEN) {
			if (this.hasAttribute(Overlay.OPEN)) {
				this.handleOpen();
			} else {
				this.handleClose();
			}
		}
	}
}

window.customElements.define('yeeyee-overlay', Overlay);

export default Overlay;
