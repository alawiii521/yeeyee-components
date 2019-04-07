import classnames from 'classnames';
import styles from './DrawerDocStyle';
import IconButton from '../../../web-componets/IconButton/IconButton';

function SettingsButton(props) {
  return (
    <div
      className={classnames(
        styles.settingsButton.className,
        props.showSettings && styles.openSettingsButton.className
      )}
    >
      {styles.settingsButton.styles}
      {styles.openSettingsButton.styles}
      <IconButton
        handleClick={props.toogleSettings}
        floating
        type="secondary"
        color="#444"
        name={props.showSettings ? 'arrow_forward' : 'settings'}
      />
    </div>
  );
}

export default SettingsButton;
