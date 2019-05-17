import { css } from '../../style/utilsStyle';
import { ColorStyle } from '../../style/color.style';

const SWITC_RIPPLE_DURATION = 750;

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

	.ripple-effect-container {
		display: block;
		overflow: hidden;
		position: absolute;
		left: 2px;
		top: -8px;
		height: 32px;
		width: 32px;
		border-radius: 50%;
		transform: scale(3);
	}

	.ripple-effect-item {
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		border-radius: 50%;
		background: ${ColorStyle.primary};
		animation-name: ripple;
		animation-duration: ${SWITC_RIPPLE_DURATION.toString()}ms;
		animation-fill-mode: both;
	}

	@keyframes ripple {
		0% {
			opacity: 0.5;
			transform: scale(0);
		}

		100% {
			opacity: 0;
			transform: scale(0.9);
		}
	}
`;

export default { default: defaultStyle, SWITC_RIPPLE_DURATION };
