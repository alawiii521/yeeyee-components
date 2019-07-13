import { css } from '../../style/utilsStyle';
import { ColorStyle } from '../../style/color.style';

const defaultStyle = css`
	::slotted(option) {
		padding: 8px 16px;
	}

	::slotted(option:hover) {
		background: rgba(0, 0, 0, 0.08);
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
		margin-bottom: 4px;
		color: #9e9e9e;
		cursor: pointer;
		transition: transform 0.2s linear;
	}

	.option-list {
		position: absolute;
		background: ${ColorStyle.white};
		min-width: 100%;
		box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
			0px 3px 14px 2px rgba(0, 0, 0, 0.12);
		animation: open-option-list 0.3s both;
		transform-origin: 0% 100%;
	}

	@keyframes open-option-list {
		from {
			opacity: 0.7;
			transform: scale(0.95);
		}

		to {
			opacity: 1;
			transform: scale(1);
		}
	}
`;

function selected(isSelected: boolean): string {
	if (isSelected) {
		return css`
			label {
				transform: translateY(-25px) scale(0.9);
			}
		`;
	} else {
		return css`
			label {
				transform: translateY(0px) scale(1);
			}
		`;
	}
}

export default { default: defaultStyle, selected, open };
