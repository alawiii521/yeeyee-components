import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import DropdownStyle from './Dropdown.style';
import WindowUtility from '../../utility/WindowUtility';
import TransitionState from '../../utility/TransitionState';

class Dropdown extends YeeYeeComponent {
	private selectedOption: HTMLOptionElement = null;
	private isOpen: boolean = false;
	private transitionState: TransitionState;
	private isOptionListOutsideWindow: boolean = false;

	protected update(): void {}

	protected connected(): void {
		this.handleContainerClick = this.handleContainerClick.bind(this);
		this.handleFocusOut = this.handleFocusOut.bind(this);
		this.openDropdown = this.openDropdown.bind(this);
		this.litRender();

		window.addEventListener('click', this.handleFocusOut);

		if (WindowUtility.hasParent()) {
			window.parent.addEventListener('click', this.handleFocusOut);
		}

		const elementGetter: () => HTMLElement = (): HTMLElement => this.shadowRoot.querySelector('.option-list');
		this.transitionState = new TransitionState(elementGetter);
	}

	protected disconnectedCallback(): void {
		window.removeEventListener('click', this.handleFocusOut);

		if (WindowUtility.hasParent()) {
			window.parent.removeEventListener('click', this.handleFocusOut);
		}
	}

	protected render(): TemplateResult {
		return html`
			<style>
				${DropdownStyle.default}
				${DropdownStyle.selected(Boolean(this.selectedOption) || this.isOpen)}
				${DropdownStyle.open(this.isOpen)}
				${DropdownStyle.optionListPlacement(this.isOptionListOutsideWindow)}
			</style>
			<div class="container" @click=${this.handleContainerClick}>
				<span>${this.selectedOption ? this.selectedOption.innerText : ''}</span>
				<label>Age</label>
				<yeeyee-icon color="#9e9e9e" name="arrow_drop_down"></yeeyee-icon>
				${this.renderOptionList()}
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
			<div @click=${(e: Event): void => this.handleOptionClick(e)} class="option-list">
				<slot></slot>
			</div>
		`;
	}

	private handleOptionClick(e: Event): void {
		const target = e.target as HTMLOptionElement;
		this.selectedOption = target;
		target.tabIndex = 0;
		target.focus();
		this.closeDropdown();
	}

	private handleContainerClick(e: Event): void {
		if (!(e.target instanceof HTMLOptionElement)) {
			this.openDropdown();
		}
	}

	private closeDropdown(): void {
		this.transitionState.removeTransition('open-option-list', 150, (): void => {
			this.isOpen = false;
			this.litRender();
		});
	}

	private openDropdown(): void {
		this.isOptionListOutsideWindow = false;
		this.isOpen = true;
		this.litRender();

		const rect = this.shadowRoot.querySelector('.option-list').getBoundingClientRect();
		const elementBottom = rect.y + rect.height;
		this.isOptionListOutsideWindow = window.innerHeight - elementBottom < 0;

		this.litRender();

		this.transitionState.applyTransition({ newClass: 'open-option-list' }, 20);
		this.selectedOption && this.selectedOption.focus();
	}
}

window.customElements.define('yeeyee-dropdown', Dropdown);

export default Dropdown;
