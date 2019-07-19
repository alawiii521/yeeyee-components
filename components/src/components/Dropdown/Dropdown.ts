import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import DropdownStyle from './Dropdown.style';
import WidnowUtility from '../../utility/WindowUtility';
import TransitionState from '../../utility/TransitionState';

class Dropdown extends YeeYeeComponent {
	private isSelected: boolean = false;
	private isOpen: boolean = false;
	private transitionState: TransitionState;
	protected update(): void {}

	protected connected(): void {
		this.handleContainerClick = this.handleContainerClick.bind(this);
		this.handleFocusOut = this.handleFocusOut.bind(this);
		this.openDropdown = this.openDropdown.bind(this);
		this.litRender();

		window.addEventListener('click', this.handleFocusOut);

		if (WidnowUtility.hasParent()) {
			window.parent.addEventListener('click', this.handleFocusOut);
		}

		const elementGetter: () => HTMLElement = (): HTMLElement => this.shadowRoot.querySelector('.option-list');
		this.transitionState = new TransitionState(elementGetter);
	}

	protected disconnectedCallback(): void {
		window.removeEventListener('click', this.handleFocusOut);

		if (WidnowUtility.hasParent()) {
			window.parent.removeEventListener('click', this.handleFocusOut);
		}
	}

	protected render(): TemplateResult {
		return html`
			<style>
				${DropdownStyle.default}
				${DropdownStyle.selected(this.isSelected)}
			</style>
			<div class="container" @click=${this.handleContainerClick}>
				<label>Age</label>
				<yeeyee-icon color="#9e9e9e" name="arrow_drop_down"></yeeyee-icon>
				${this.isOpen ? this.renderOptionList() : null}
			</div>
		`;
	}

	private handleFocusOut(e: Event): void {
		if (this.shouldCloseDropdown(e)) {
			this.closeDropdown();
		}
	}

	private shouldCloseDropdown(e: Event): boolean {
		const optionList = this.querySelectorAll('option');

		if (this.isOpen && optionList && optionList.length > 0) {
			const optionArray = Array.from(optionList);

			if (e.target !== this && !optionArray.includes(e.target as HTMLOptionElement)) {
				return true;
			}
		}

		return false;
	}

	private renderOptionList(): TemplateResult {
		return html`
			<div class="option-list">
				<slot></slot>
			</div>
		`;
	}

	private handleContainerClick(): void {
		this.openDropdown();
	}

	private closeDropdown(): void {
		this.transitionState.removeTransition(
			'open-option-list',
			200,
			(): void => {
				this.isOpen = false;
				this.litRender();
			}
		);
	}

	private openDropdown(): void {
		this.isOpen = true;
		this.litRender();
		this.transitionState.applyTransition({ newClass: 'open-option-list' }, 20);
	}
}

window.customElements.define('yeeyee-dropdown', Dropdown);

export default Dropdown;
