import { css } from '../../style/utilsStyle';
import { paddingStyle } from '../../style/padding.style';
import { colorStyle } from '../../style/color.style';

const defaultStyle = css`
  a {
    display: block;
    padding: ${paddingStyle.large} ${paddingStyle.xxLarge};
    min-width: 200px;
    text-decoration: none;
    color: ${colorStyle.textColor};
    font-weight: bold;
    border: solid 0 ${colorStyle.borderColor};
    border-bottom-width: 1px;
    text-align: left;
  }

  a:hover {
    background: ${colorStyle.primary};
    color: ${colorStyle.white};
  }
`;

export default { default: defaultStyle };
