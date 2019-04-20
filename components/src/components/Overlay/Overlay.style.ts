import { css } from '../../style/utilsStyle';

const defaultBackground = 'rgba(0, 0, 0, 0.35);';

const animationDuration = 300;

const defaultStyle = css`
	div {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 50;
		animation-fill-mode: both;
		animation-duration: ${animationDuration.toString()}ms;
	}
`;

const color = (background?: string): string => css`
	div {
		background: ${background || defaultBackground};
	}
`;

export default { default: defaultStyle, color };

export { animationDuration };
