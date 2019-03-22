import { css } from '../style/utilsStyle';

const animation = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation-name: fadeIn;
  }
`;

export default animation;
