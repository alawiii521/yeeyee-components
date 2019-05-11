import { css } from '../style/utilsStyle';

const rippleDurationMilli = 600;

const rippleRenderCss = css`
	.rippleContainer {
		position: relative;
		overflow: hidden;
		transform: translate3d(0, 0, 0);
	}

	.ripplePoint {
		position: absolute;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.3);
		transform: scale(0);
		animation: ripple ${rippleDurationMilli / 1000 + 's'} linear;
	}

	@keyframes ripple {
		to {
			transform: scale(2);
			opacity: 0;
		}
	}
`;

const rippleCss = css`
	.ripple {
		position: relative;
		overflow: hidden;
		transform: translate3d(0, 0, 0);
	}

	.ripple:after {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		pointer-events: none;
		background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
		background-repeat: no-repeat;
		background-position: 50%;
		transform: scale(10, 10);
		opacity: 0;
		transition: transform 0.5s, opacity 1s;
	}

	.ripple:active:after {
		transform: scale(0, 0);
		opacity: 0.3;
		transition: 0s;
	}
`;

function renderRipple(x: number, y: number, domElement: Element): void {
	const diameter = Math.max(domElement.clientWidth, domElement.clientHeight);
	const rect = domElement.getBoundingClientRect();

	const circle = document.createElement('div');

	circle.style.width = circle.style.height = diameter + 'px';
	circle.style.left = x - rect.left - diameter / 2 + 'px';
	circle.style.top = y - rect.top - diameter / 2 + 'px';

	domElement.classList.add('rippleContainer');
	circle.classList.add('ripplePoint');

	domElement.appendChild(circle);

	setTimeout((): void => {
		domElement.removeChild(circle);
	}, rippleDurationMilli);
}

export { rippleRenderCss, renderRipple, rippleCss };
