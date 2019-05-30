import PropTypes from 'prop-types';
import { useState } from 'react';
import WindowService from '../../services/WindowService';

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

	return <textarea onChange={setSlot} value={slotContent} />;
}

SlotSetting.propTypes = {
	initValue: PropTypes.string,
};

export default SlotSetting;
