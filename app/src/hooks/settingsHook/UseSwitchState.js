import { useState } from 'react';
import useMessageListener from '../core/UseMessageListener';

function useSwitchState(name, initState) {
	const [checked, setChecked] = useState(initState);
	const handleEvent = e => {
		if (name === e.data.name) {
			setChecked(e.data.checked);
		}
	};

	useMessageListener(handleEvent);

	return checked;
}

export default useSwitchState;
