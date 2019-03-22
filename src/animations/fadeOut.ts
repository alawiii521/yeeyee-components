import { css } from '../style/utilsStyle';

const animation = css`
  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .fade-out {
    animation-name: fadeOut;
  }
`;

export default animation;
