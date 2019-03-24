import { defaultFontStyle } from '../../style/font.style';
import { paddingStyle } from '../../style/padding.style';
import { colorStyle } from '../../style/color.style';
import { css } from '../../style/utilsStyle';

const values = {
  normal: `
    font-size: ${defaultFontStyle.fontSize.small};
    padding: 0 ${paddingStyle.xxLarge};
    height: 32px;
    line-height: 32px;
  `,
};

const defaultButtonStyle = css`
  button {
    ${values.normal}
    font-family: ${defaultFontStyle.fontFamily}
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    letter-spacing: 0.5px;
    border: none;
    border-radius: 3px;
    background-color: ${colorStyle.primary};
    transition: 0.3s ease-out background-color;
    color: ${colorStyle.white};
    text-transform: uppercase;
    outline: none;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  }

  button:hover {
    background-color: ${colorStyle.primaryDark};
  }
`;

export { defaultButtonStyle };
