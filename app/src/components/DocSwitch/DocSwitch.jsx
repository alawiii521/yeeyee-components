import PropTypes from 'prop-types';
import Switch from '../../web-components/Switch';
import DocSwitchStyle from './DocSwitch.module.less';
import useSwitchDocReducer from '../../hooks/UseSwitchDocReducer';
import { useEffect } from 'react';

function DocSwitch(props) {
	const [checked, toggleState] = useSwitchDocReducer(true);

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
