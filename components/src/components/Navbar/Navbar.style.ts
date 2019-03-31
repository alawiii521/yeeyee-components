import { css } from '../../style/utilsStyle';
import { colorStyle } from '../../style/color.style';
import { fontStyle } from '../../style/font.style';
import { paddingStyle } from '../../style/padding.style';
import Navbar from './Navbar';
import DrawerStyle from '../Drawer/Drawer.style';
import DrawerItemStyle from '../DrawerItem/DrawerItem.style';

const defaultStyle = css`
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 64px;
    background: ${colorStyle.primary};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.15),
      0px 4px 5px 0px rgba(0, 0, 0, 0.15), 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    padding: 0 0.75rem;
    transition: max-width ${DrawerStyle.animationDuration.toString()}ms
      ${DrawerStyle.timingFunction};
    margin-left: auto;
    box-sizing: border-box;
  }

  a {
    color: ${colorStyle.white};
    font-weight: bold;
    text-decoration: none;
    font-size: ${fontStyle.fontSize.xLarge};
  }

  yeeyee-icon-button {
    margin-right: ${paddingStyle.xxLarge};
  }

  .action-bar {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

const open = (open: boolean, type: string) => {
  if (open && type === Navbar.Type.PERSISTENT) {
    return css`
      nav {
        max-width: calc(100% - ${DrawerItemStyle.width.toString()}px);
      }
    `;
  } else {
    return css`
      nav {
        max-width: 100%;
      }
    `;
  }
};

export default { default: defaultStyle, open };
