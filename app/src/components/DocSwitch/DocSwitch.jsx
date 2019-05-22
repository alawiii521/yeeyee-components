import PropTypes from 'prop-types';
import Switch from '../../web-components/Switch';
import DocSwitchStyle from './DocSwitch.module.less';
import useSwitchDocReducer from '../../hooks/UseSwitchDocReducer';

function DocSwitch(props) {
	const [value, toggleState] = useSwitchDocReducer(true);
	return (
		<div className={DocSwitchStyle.wrapper}>
			<label>{props.label}</label>
			<Switch checked={value} handleChange={toggleState} />
		</div>
	);
}

DocSwitch.propTypes = {
	label: PropTypes.string.isRequired,
};

export default DocSwitch;
