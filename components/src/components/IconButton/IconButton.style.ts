import { css } from '../../style/utilsStyle';
import { ColorStyle } from '../../style/color.style';
import { StyleTypes } from '../../constants/styleConstants';

const defaultStyle = css`
	button {
		cursor: pointer;
		text-decoration: none;
		border: none;
		border-radius: 50%;
		padding: 0.5rem;
		outline: none;
		transition: 0.3s ease-out background-color;
	}
`;

const type = (type: string): string => {
	if (type === StyleTypes.PRIMARY || !type) {
		return css`
			button {
				background: ${ColorStyle.primary};
			}

			button:hover {
				background-color: ${ColorStyle.primaryDark};
			}
		`;
	} else if (type === StyleTypes.SECONDARY) {
		return css`
			button {
				background: ${ColorStyle.grey};
			}

			button:hover {
				background-color: ${ColorStyle.darkGrey};
			}
		`;
	}
};

const floating = (floating: boolean): string => {
	if (floating) {
		return css`
			button {
				box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
					0px 1px 18px 0px rgba(0, 0, 0, 0.12);
			}
		`;
	}
};

export default { default: defaultStyle, type, floating };
