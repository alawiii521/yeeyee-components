import { useState } from 'react';
import useMessageListener from '../core/UseMessageListener';

function useSlotState(initValue) {
	const [value, setValue] = useState(initValue);
	useMessageListener(e => {
		setValue(e.data.content);
	});

	return value;
}

export default useSlotState;
