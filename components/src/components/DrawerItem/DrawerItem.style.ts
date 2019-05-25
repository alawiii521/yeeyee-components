import { css } from '../../style/utilsStyle';
import { paddingStyle } from '../../style/padding.style';
import { ColorStyle } from '../../style/color.style';

const width = 250;

const defaultStyle = css`
	div {
		display: block;
		min-width: ${width.toString()}px;
		width: ${width.toString()}px;
		color: ${ColorStyle.textColor};
		font-weight: bold;
		padding: ${paddingStyle.large} ${paddingStyle.xxLarge};
		border: solid 0 ${ColorStyle.borderColor};
		border-bottom-width: 1px;
		text-align: left;
		cursor: pointer;
		box-sizing: border-box;
	}

	div:hover {
		background: ${ColorStyle.primary};
		color: ${ColorStyle.white};
	}
`;

export default { default: defaultStyle, width };
