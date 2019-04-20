import { css } from '../../style/utilsStyle';
import { colorStyle } from '../../style/color.style';
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
				background: ${colorStyle.primary};
			}

			button:hover {
				background-color: ${colorStyle.primaryDark};
			}
		`;
	} else if (type === StyleTypes.SECONDARY) {
		return css`
			button {
				background: ${colorStyle.grey};
			}

			button:hover {
				background-color: ${colorStyle.darkGrey};
			}
		`;
	}
};

const floating = (floating: boolean): string => {
	if (floating) {
		return css`
			box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
				0px 1px 18px 0px rgba(0, 0, 0, 0.12);
		`;
	}
};

export default { default: defaultStyle, type, floating };
