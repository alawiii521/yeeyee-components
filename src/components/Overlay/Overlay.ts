import YeeYeeComponent from '../YeeYeeComponent/index';
import { html } from 'lit-html';
import overlayStyle, { animationDuration } from './Overlay.style';
import fadeIn from '../../animations/fadeIn';
import fadeOut from '../../animations/fadeOut';

class Overlay extends YeeYeeComponent {
  static OPEN: string = 'open';
  static Event = Object.freeze({
    ANIMATION_END: 'animationend',
    CLOSE: 'close',
  });

  static Animation = Object.freeze({
    OPEN: 'open',
    CLOSE: 'close',
  });

  private open: boolean = false;
  private currentAnimation: string = '';

  static get observedAttributes() {
    return [Overlay.OPEN];
  }

  protected getTemplateResult() {
    return html`
      <style>
        ${overlayStyle.default}
        ${fadeIn.style}
        ${fadeOut.style}
        ${overlayStyle.color()}
      </style>
      ${this.open
        ? html`
            <div
              class=${this.currentAnimation}
              @click=${() => this.handleOverlayClick()}
            ></div>
          `
        : ''}
    `;
  }

  private handleOverlayClick() {
    this.removeAttribute(Overlay.OPEN);
  }

  private handleClose(): void {
    this.setAnimation(fadeOut.name);
    this.render();
    this.emit(Overlay.Event.CLOSE, {});
    setTimeout(() => this.onFadeOutEnd(), animationDuration);
  }

  private handleOpen(): void {
    this.open = true;
    this.fadeIn();
    this.render();
  }

  private fadeIn() {
    this.setAnimation(fadeIn.name);
    setTimeout(() => this.onFadeInEnd(), animationDuration);
  }

  private setAnimation(name: string): void {
    this.currentAnimation = name;
  }

  private onFadeOutEnd() {
    this.open = false;
    this.render();
    this.emit(Overlay.Event.ANIMATION_END, { type: Overlay.Animation.CLOSE });
  }

  private onFadeInEnd() {
    this.emit(Overlay.Event.ANIMATION_END, { type: Overlay.Animation.OPEN });
  }

  protected connected() {
    if (this.hasAttribute(Overlay.OPEN)) {
      this.handleOpen();
    }
  }

  protected update(name: string, newValue: string, oldValue: string) {
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
