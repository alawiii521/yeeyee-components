import { useState } from 'react';
import useMessageListener from '../core/UseMessageListener';

function useSwitchState() {
	const [checked, setChecked] = useState(true);
	const handleEvent = e => {
		setChecked(e.data.checked);
	};

	useMessageListener(handleEvent);

	return checked;
}

export default useSwitchState;
