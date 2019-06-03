import PropTypes from 'prop-types';
import { useState } from 'react';
import WindowService from '../../services/WindowService';
import SlotSettingStyle from './SlotSetting.module.less';

const useSlotState = (initValue = '', name = 'slot') => {
	const [value, setValue] = useState(initValue);

	const handleSlotChange = e => {
		setValue(e.target.value);
		WindowService.postMessage({ name, content: e.target.value });
	};

	return [value, handleSlotChange];
};

function SlotSetting(props) {
	const [slotContent, setSlot] = useSlotState(props.initValue);

	return (
		<>
			<h3 className={SlotSettingStyle.name}>{props.name}</h3>
			<div className={SlotSettingStyle.textarea}>
				<textarea onChange={setSlot} value={slotContent} />
			</div>
		</>
	);
}

SlotSetting.propTypes = {
	initValue: PropTypes.string,
	name: PropTypes.string.isRequired,
};

export default SlotSetting;
