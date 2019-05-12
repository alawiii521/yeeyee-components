import { css } from '../../style/utilsStyle';
import { ColorStyle } from '../../style/color.style';

const defaultStyle = css`
	input {
		padding: 8px 4px;
		font-size: 1rem;
		font-family: inherit;
		outline: none;
		border: none;
		color: ${ColorStyle.textColor};
		box-shadow: inset 0px 2px 0px 2px ${ColorStyle.white}, inset 0px 0px 0px 1px ${ColorStyle.darkGrey};
	}

	label {
		position: absolute;
		top: 8px;
		left: 4px;
		color: ${ColorStyle.textColor};
		transition: transform 200ms ease-out;
		transform: translateY(0) scale(1);
	}

	div {
		position: relative;
	}

	input:focus {
		box-shadow: inset 0px 3px 0px 3px ${ColorStyle.white}, inset 0px 0px 0px 2px ${ColorStyle.primary};
	}

	.active {
		color: ${ColorStyle.primary};
		transform: translateY(-22px) scale(0.85);
	}
`;

export default { default: defaultStyle };
