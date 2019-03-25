import { css } from '../style/utilsStyle';

const name: string = 'fade-in';

const style = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .${name} {
    animation-name: fadeIn;
  }
`;

export default { style, name };
