import PropTypes from 'prop-types';
import WindowSettingsStyle from './WindowSettings.module.less';
import IconButton from '../../web-components/IconButton/IconButton';
import NumberInput from '../../web-components/NumberInput';

function WindowSettings(props) {
	return (
		<div className={WindowSettingsStyle.wrapper}>
			<NumberInput value={props.x} handleInput={props.handleX} label="x" />

			<NumberInput value={props.y} handleInput={props.handleY} label="y" />
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
	handleX: PropTypes.func.isRequired,
	handleY: PropTypes.func.isRequired,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
};

export default WindowSettings;
