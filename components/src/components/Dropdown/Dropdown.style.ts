import { css } from '../../style/utilsStyle';
import { ColorStyle } from '../../style/color.style';

const defaultStyle = css`
	::slotted(option) {
		padding: 8px 16px;
	}

	::slotted(option:hover) {
		background: rgba(0, 0, 0, 0.08);
	}

	::slotted(option:focus) {
		background: rgba(0, 0, 0, 0.14);
		outline: none;
	}

	.container {
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		box-shadow: inset 0 -1px ${ColorStyle.darkGrey};
		height: 32px;
		min-width: 100px;
		box-sizing: border-box;
		transition: box-shadow 0.2s linear;
		cursor: pointer;
		user-select: none;
	}

	.container:hover {
		box-shadow: inset 0 -2px rgba(0, 0, 0, 0.87);
	}

	label {
		position: absolute;
		color: #9e9e9e;
		cursor: pointer;
		transition: bottom 0.15s ease-in-out, transform 0.2s linear;
	}

	span {
		margin-bottom: ${4 / 16 + 'rem'};
		text-indent: ${2 / 16 + 'rem'};
	}

	.option-list {
		position: absolute;
		background: ${ColorStyle.white};
		min-width: 100%;
		box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
			0px 3px 14px 2px rgba(0, 0, 0, 0.12);
		transition: transform 0.15s linear, opacity 0.15s linear;
		transform-origin: 0% 100%;
		opacity: 0;
		transform: scale(0.95);
		z-index: 500;
	}

	.open-option-list {
		opacity: 1;
		transform: scale(1);
	}
`;

function open(isOpen: boolean): string {
	return css`
		.option-list {
			display: ${isOpen ? 'block' : 'none'};
		}
	`;
}

function selected(isSelected: boolean): string {
	if (isSelected) {
		return css`
			label {
				transform: scale(0.85);
				bottom: ${28 / 16 + 'rem'};
				color: ${ColorStyle.primary};
			}
		`;
	} else {
		return css`
			label {
				transform: scale(1);
				bottom: ${4 / 16 + 'rem'};
			}
		`;
	}
}

function optionListPlacement(isOutisdeWindow: boolean): string {
	return css`
		.option-list {
			${isOutisdeWindow ? 'bottom' : 'top'}: 100%;
		}
	`;
}

export default { default: defaultStyle, selected, open, optionListPlacement };
