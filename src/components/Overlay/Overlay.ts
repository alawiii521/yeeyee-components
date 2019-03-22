import YeeYeeComponent from '../YeeYeeComponent/index';
import { html } from 'lit-html';
import overlayStyle, { animationDuration } from './Overlay.style';
import fadeIn from '../../animations/fadeIn';
import fadeOut from '../../animations/fadeOut';

class Overlay extends YeeYeeComponent {
  static OPEN: string = 'open';
  static ANIMATION_END: string = 'animationend';
  static Animation = Object.freeze({
    OPEN: 'open',
    CLOSE: 'close',
  });

  private open: boolean = false;

  static get observedAttributes() {
    return [Overlay.OPEN];
  }

  protected getTemplateResult() {
    return html`
      <style>
        ${overlayStyle.default}
        ${fadeIn}
        ${fadeOut}
        ${overlayStyle.color()}
      </style>
      ${this.hasAttribute(Overlay.OPEN)
        ? html`
            <div
              class=${this.open ? 'fade-in' : 'fade-out'}
              @click=${() => this.handleClose()}
            ></div>
          `
        : ''}
    `;
  }

  private handleClose(): void {
    this.open = false;
    this.render();
    setTimeout(() => this.onFadedOut(), animationDuration);
  }

  private onFadedOut() {
    this.removeAttribute(Overlay.OPEN);
    this.emit(Overlay.ANIMATION_END, { type: Overlay.Animation.CLOSE });
  }

  private onFadedIn() {
    this.emit(Overlay.ANIMATION_END, { type: Overlay.Animation.OPEN });
  }

  protected connected() {
    this.open = this.hasAttribute(Overlay.OPEN);
    if (this.open) {
      setTimeout(() => this.onFadedIn(), animationDuration);
    }
    this.render();
  }

  protected update(name: string, newValue: string, oldValue: string) {
    if (name === Overlay.OPEN) {
      this.open = this.hasAttribute(Overlay.OPEN);
      if (this.open) {
        setTimeout(() => this.onFadedIn(), animationDuration);
      }
      this.render();
    }
  }
}

window.customElements.define('yeeyee-overlay', Overlay);

export default Overlay;
