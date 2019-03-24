import { css } from '../../style/utilsStyle';
import { colorStyle } from '../../style/color.style';
import { defaultFontStyle } from '../../style/font.style';
import { paddingStyle } from '../../style/padding.style';

const defaultNavbarStyle = css`
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 64px;
    background: ${colorStyle.primary};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.15),
      0px 4px 5px 0px rgba(0, 0, 0, 0.15), 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    padding: 0 0.75rem;
  }

  a {
    color: ${colorStyle.white};
    font-weight: bold;
    text-decoration: none;
    font-size: ${defaultFontStyle.fontSize.xLarge};
  }

  yeeyee-icon-button {
    margin-right: ${paddingStyle.xxLarge};
  }
`;

export { defaultNavbarStyle };
