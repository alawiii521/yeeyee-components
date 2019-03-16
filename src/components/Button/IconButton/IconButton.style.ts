import { css } from '../../../style/utilsStyle';
import { colorStyle } from '../../../style/color.style';

const defaultIconButtonStyle = css`
  button {
    cursor: pointer;
    text-decoration: none;
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    outline: none;
    background: ${colorStyle.primary};
    transition: 0.3s ease-out background-color;
  }

  button:hover {
    background-color: ${colorStyle.primaryDark};
  }
`;

export { defaultIconButtonStyle };
