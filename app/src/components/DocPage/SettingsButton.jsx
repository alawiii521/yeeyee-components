import PropTypes from 'prop-types';
import classnames from 'classnames';
import SettingsButtonStyle from './SettingsButton.module.less';
import IconButton from '../../web-componets/IconButton/IconButton';

function SettingsButton(props) {
	return (
		<div
			className={classnames(
				SettingsButtonStyle.wrapper,
				props.showSettings && SettingsButtonStyle.openSettingsButton
			)}
		>
			<IconButton
				handleClick={props.toggleSettings}
				floating
				type="secondary"
				color="#444"
				name={props.showSettings ? 'arrow_forward' : 'settings'}
			/>
		</div>
	);
}

SettingsButton.propTypes = {
	showSettings: PropTypes.bool.isRequired,
	toggleSettings: PropTypes.func.isRequired,
};

export default SettingsButton;
