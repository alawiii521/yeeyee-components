import { css } from '../../style/utilsStyle';
import Drawer from './Drawer';
import { ColorStyle } from '../../style/color.style';

const animationDuration = 200;
const timingFunction = 'ease-in-out';
const defaultStyle = css`
	div {
		position: fixed;
		height: 100%;
		overflow-y: auto;
		background: ${ColorStyle.white};
		box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14),
			0px 6px 30px 5px rgba(0, 0, 0, 0.12);
		transition: transform ${timingFunction} ${animationDuration.toString()}ms;
		transform: translate(0px, 0px);
		z-index: 100;
	}
`;

function alignment(alignment: string): string {
	if (alignment === Drawer.Alignment.LEFT || alignment === null) {
		return css`
			div {
				left: 0;
			}
		`;
	} else if (alignment === Drawer.Alignment.RIGHT) {
		return css`
			div {
				right: 0;
			}
		`;
	}
}

function open(open = false, alignment: string): string {
	if (open) {
		return '';
	}

	if (alignment === Drawer.Alignment.LEFT || alignment === null) {
		return css`
			div {
				transform: translate(-100%, 0px);
			}
		`;
	} else if (alignment === Drawer.Alignment.RIGHT) {
		return css`
			div {
				transform: translate(100%, 0px);
			}
		`;
	}
}

function offsetTop(offset: string): string {
	return css`
		div {
			top: ${offset ? offset : '0'};
		}
	`;
}

export default {
	default: defaultStyle,
	alignment,
	open,
	animationDuration,
	timingFunction,
	offsetTop,
};
