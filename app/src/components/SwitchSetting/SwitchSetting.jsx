import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Switch from '../../web-components/Switch';
import DocSwitchStyle from './SwitchSetting.module.less';
import UseToggleReducer from '../../hooks/core/UseToggleReducer';
import WindowService from '../../services/WindowService';
import useMessageListener from '../../hooks/core/UseMessageListener';

function SwitchSetting({ name, initValue = false }) {
	const [checked, toggleState] = UseToggleReducer(initValue);

	useEffect(() => {
		// window is not available when doing server side rendering
		typeof window !== 'undefined' &&
			WindowService.postMessage({ name: name, content: checked });
	}, [name, checked]);

	useMessageListener(toggleState);

	return (
		<div className={DocSwitchStyle.wrapper}>
			<label>{name}</label>
			<Switch checked={checked} handleChange={toggleState} />
		</div>
	);
}

SwitchSetting.propTypes = {
	name: PropTypes.string.isRequired,
	initValue: PropTypes.bool,
};

export default SwitchSetting;
