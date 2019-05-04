import PropTypes from 'prop-types';
import WindowSettingsStyle from './WindowSettings.module.less';
import IconButton from '../../web-componets/IconButton/IconButton';

function WindowSettings(props) {
	return (
		<div className={WindowSettingsStyle.wrapper}>
			<label>x</label>
			<input type="number" onChange={props.handleX} value={props.x} />
			<label>y</label>
			<input type="number" onChange={props.handleY} value={props.y} />
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
