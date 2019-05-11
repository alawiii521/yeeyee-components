import PropTypes from 'prop-types';
import WindowSettingsStyle from './WindowSettings.module.less';
import IconButton from '../../web-componets/IconButton/IconButton';
import NumberInput from '../../web-componets/NumberInput';

function WindowSettings(props) {
	return (
		<div className={WindowSettingsStyle.wrapper}>
			<label>x</label>
			<NumberInput value={props.x} handleInput={props.handleX} />
			<label>y</label>
			<NumberInput value={props.y} handleInput={props.handleY} />
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
