import PropTypes from 'prop-types';
import FakeActionButton from './FakeActionButton';
import FakeWindowStyle from './FakeWindow.module.less';
import { WindowOrientation } from '../../constants/WindowConstants';

function FakeWindow(props) {
	const landscape = props.orientation === WindowOrientation.LANDSCAPE;
	const x = landscape ? props.x : props.y;
	const y = landscape ? props.y : props.x;

	return (
		<div style={{ width: x }} className={FakeWindowStyle.wrapper}>
			<div className={FakeWindowStyle.bar}>
				<div className={FakeWindowStyle.actionContainer}>
					<FakeActionButton color="#f65f56" />
					<FakeActionButton color="#fbbd2e" />
					<FakeActionButton color="#44c93f" />
				</div>
			</div>
			<div style={{ height: y }} className={FakeWindowStyle.window}>
				<iframe
					src={props.contentUrl}
					style={{ height: '100%', width: '100%', border: 'none' }}
				/>
			</div>
		</div>
	);
}

FakeWindow.propTypes = {
	x: PropTypes.string.isRequired,
	y: PropTypes.string.isRequired,
	contentUrl: PropTypes.string.isRequired,
	orientation: PropTypes.oneOf([
		WindowOrientation.LANDSCAPE,
		WindowOrientation.PORTRAIT,
	]).isRequired,
};

export default FakeWindow;
