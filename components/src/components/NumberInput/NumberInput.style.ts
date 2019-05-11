import { css } from '../../style/utilsStyle';
import { colorStyle } from '../../style/color.style';

const defaultStyle = css`
	input {
		padding: 8px 4px;
		font-size: 1rem;
		font-family: inherit;
		outline: none;
		border: none;
		color: ${colorStyle.textColor};
		box-shadow: inset 0px 2px 0px 2px ${colorStyle.white}, inset 0px 0px 0px 1px ${colorStyle.darkGrey};
	}

	input:focus {
		box-shadow: inset 0px 3px 0px 3px ${colorStyle.white}, inset 0px 0px 0px 2px ${colorStyle.primary};
	}

	label {
		color: ${colorStyle.textColor};
	}

	.focus {
		color: ${colorStyle.primary};
	}
`;

export default { default: defaultStyle };
