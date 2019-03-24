import { css } from '../../style/utilsStyle';
import Drawer from './Drawer';
import { colorStyle } from '../../style/color.style';

const animationDuration = 200;

const defaultStyle = css`
  div {
    position: fixed;
    top: 0;
    height: 100%;
    overflow-y: auto;
    background: ${colorStyle.white};
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
      0px 16px 24px 2px rgba(0, 0, 0, 0.14),
      0px 6px 30px 5px rgba(0, 0, 0, 0.12);
    transition: transform ease-in-out ${animationDuration.toString()}ms;
    transform: translate(0px, 0px);
    z-index: 100;
  }
`;

function align(align: string): string {
  if (align === Drawer.Align.LEFT || align === null) {
    return css`
      div {
        left: 0;
      }
    `;
  } else if (align === Drawer.Align.RIGHT) {
    return css`
      div {
        right: 0;
      }
    `;
  }
}

function open(open = false, align: string): string {
  if (open) {
    return '';
  }

  if (align === Drawer.Align.LEFT || align === null) {
    return css`
      div {
        transform: translate(-100%, 0px);
      }
    `;
  } else if (align === Drawer.Align.RIGHT) {
    return css`
      div {
        transform: translate(100%, 0px);
      }
    `;
  }
}

export default {
  default: defaultStyle,
  align,
  open,
  animationDuration,
};
