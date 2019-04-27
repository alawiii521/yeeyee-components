import PropTypes from 'prop-types';
import FakeActionButton from './FakeActionButton';
import FakeWindowStyle from './FakeWindow.module.less';

function FakeWindow(props) {
	return (
		<div style={{ width: props.width }} className={FakeWindowStyle.wrapper}>
			<div className={FakeWindowStyle.bar}>
				<div className={FakeWindowStyle.actionContainer}>
					<FakeActionButton color="#f65f56" />
					<FakeActionButton color="#fbbd2e" />
					<FakeActionButton color="#44c93f" />
				</div>
			</div>
			<div style={{ height: props.height }} className={FakeWindowStyle.window}>
				{props.children ? (
					<iframe className={FakeWindowStyle.iframe} />
				) : (
					props.children
				)}
			</div>
		</div>
	);
}

FakeWindow.propTypes = {
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

export default FakeWindow;
