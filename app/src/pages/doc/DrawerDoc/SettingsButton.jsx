import classnames from 'classnames';
import styles from './DrawerDocStyle';

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
      <yeeyee-icon-button
        onClick={() => props.setShowSettings(!props.showSettings)}
        floating
        type="secondary"
        color="#444"
        name={props.showSettings ? 'arrow_forward' : 'settings'}
      />
    </div>
  );
}

export default SettingsButton;
