import { useState } from 'react';
import useMessageListener from './UseMessageListener';

function usePostMessageListenerState(name, initValue) {
	const [value, setValue] = useState(initValue);
	useMessageListener(e => {
		if (name === e.data.name) {
			setValue(e.data.content);
		}
	});

	return value;
}

export default usePostMessageListenerState;
