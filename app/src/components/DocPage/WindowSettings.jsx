import PropTypes from 'prop-types';
import WindowSettingsStyle from './WindowSettings.module.less';
import IconButton from '../../web-componets/IconButton/IconButton';

function WindowSettings(props) {
	return (
		<div className={WindowSettingsStyle.wrapper}>
			<IconButton
				handleClick={props.toggleOrientation}
				floating
				type="secondary"
				color="#444"
				name={'replay'}
			/>
		</div>
	);
}

WindowSettings.propTypes = {
	toggleOrientation: PropTypes.func.isRequired,
};

export default WindowSettings;
