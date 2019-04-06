import css from 'styled-jsx/css';

const settingsButton = css.resolve`
    div { 
        position: fixed;
        right: 50px;
        bottom: 30px;
        display: inline;
        transition: right 200ms ease-in-out;
    }
`;

const openSettingsButton = css.resolve`
    div { 
        right: 250px;
    }
`;

export default { settingsButton, openSettingsButton };
