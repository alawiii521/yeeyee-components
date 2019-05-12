import { css } from '../../style/utilsStyle';
import { ColorStyle } from '../../style/color.style';

const defaultStyle = css`
	input {
		opacity: 0;
		width: 0;
		height: 0;
		margin: 0;
	}

	.switch {
		position: relative;
		display: block;
		height: 20px;
		width: 36px;
		cursor: pointer;
	}

	.slider {
		position: absolute;
		top: 0px;
		background: ${ColorStyle.darkGrey};
		opacity: 0.5;
		height: 16px;
		width: 36px;
		display: block;
		border-radius: 16px;
		transition: background 150ms ease-in-out;
	}

	input:checked ~ .slider {
		background: ${ColorStyle.primary};
	}

	.lever {
		display: block;
		position: absolute;
		top: -2px;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background: ${ColorStyle.darkGrey};
		transition: transform 150ms ease-in-out, background 150ms ease-in-out;
	}

	input:checked ~ .lever {
		transform: translateX(16px);
		background: ${ColorStyle.primary};
	}
`;

export default { default: defaultStyle };
