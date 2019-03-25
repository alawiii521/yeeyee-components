import { css } from '../style/utilsStyle';

const name: string = 'fade-out';

const style = css`
  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .${name} {
    animation-name: fadeOut;
  }
`;

export default { style, name };
