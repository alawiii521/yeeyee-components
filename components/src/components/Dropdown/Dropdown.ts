import { html, TemplateResult } from 'lit-html';
import YeeYeeComponent from '../YeeYeeComponent';
import DropdownStyle from './Dropdown.style';
import WidnowUtility from '../../utility/WindowUtility';

class Dropdown extends YeeYeeComponent {
	private isSelected: boolean = false;
	private isOpen: boolean = false;
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

		if (optionList && optionList.length > 0) {
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
		this.isOpen = false;
		this.litRender();
	}

	private openDropdown(): void {
		this.isOpen = true;
		this.litRender();
	}
}

window.customElements.define('yeeyee-dropdown', Dropdown);

export default Dropdown;
