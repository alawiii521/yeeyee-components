import PropTypes from 'prop-types';
import Switch from '../../web-components/Switch';
import DocSwitchStyle from './SwitchSetting.module.less';
import UseToggleReducer from '../../hooks/core/UseToggleReducer';
import { useEffect } from 'react';
import WindowService from '../../services/WindowService';

const COMPONENT_NAME = 'switch';

function DocSwitch(props) {
	const [checked, toggleState] = UseToggleReducer(true);

	// window is not available when doing server side rendering
	typeof window !== 'undefined' &&
		WindowService.postMessage({ name: COMPONENT_NAME, checked });

	useEffect(() => {
		const handleEvent = () => {
			toggleState();
		};

		window.addEventListener('message', handleEvent);

		return () => window.removeEventListener('message', handleEvent);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={DocSwitchStyle.wrapper}>
			<label>{props.label}</label>
			<Switch checked={checked} handleChange={toggleState} />
		</div>
	);
}

DocSwitch.propTypes = {
	label: PropTypes.string.isRequired,
};

export default DocSwitch;
