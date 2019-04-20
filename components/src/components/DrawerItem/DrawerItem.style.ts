import { css } from '../../style/utilsStyle';
import { paddingStyle } from '../../style/padding.style';
import { colorStyle } from '../../style/color.style';

const width = 200;

const defaultStyle = css`
	a,
	div {
		display: block;
		padding: ${paddingStyle.large} ${paddingStyle.xxLarge};
		min-width: ${width.toString()}px;
		width: ${width.toString()}px;
		text-decoration: none;
		color: ${colorStyle.textColor};
		font-weight: bold;
		border: solid 0 ${colorStyle.borderColor};
		border-bottom-width: 1px;
		text-align: left;
		cursor: pointer;
		box-sizing: border-box;
	}

	a:hover,
	div:hover {
		background: ${colorStyle.primary};
		color: ${colorStyle.white};
	}
`;

export default { default: defaultStyle, width };
