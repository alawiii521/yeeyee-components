import { css } from '../../style/utilsStyle';
import { paddingStyle } from '../../style/padding.style';
import { ColorStyle } from '../../style/color.style';

const width = 250;

const defaultStyle = css`
	a,
	div {
		display: block;
		padding: ${paddingStyle.large} ${paddingStyle.xxLarge};
		min-width: ${width.toString()}px;
		width: ${width.toString()}px;
		text-decoration: none;
		color: ${ColorStyle.textColor};
		font-weight: bold;
		border: solid 0 ${ColorStyle.borderColor};
		border-bottom-width: 1px;
		text-align: left;
		cursor: pointer;
		box-sizing: border-box;
	}

	a:hover,
	div:hover {
		background: ${ColorStyle.primary};
		color: ${ColorStyle.white};
	}
`;

export default { default: defaultStyle, width };
