import PropTypes from 'prop-types';
import Switch from '../../web-components/Switch';
import DocSwitchStyle from './SwitchSetting.module.less';
import UseToggleReducer from '../../hooks/core/UseToggleReducer';
import WindowService from '../../services/WindowService';
import useMessageListener from '../../hooks/core/UseMessageListener';

const COMPONENT_NAME = 'switch';

function SwitchSetting(props) {
	const [checked, toggleState] = UseToggleReducer(true);

	// window is not available when doing server side rendering
	typeof window !== 'undefined' &&
		WindowService.postMessage({ name: COMPONENT_NAME, checked });

	useMessageListener(toggleState);

	return (
		<div className={DocSwitchStyle.wrapper}>
			<label>{props.name}</label>
			<Switch checked={checked} handleChange={toggleState} />
		</div>
	);
}

SwitchSetting.propTypes = {
	name: PropTypes.string.isRequired,
};

export default SwitchSetting;
