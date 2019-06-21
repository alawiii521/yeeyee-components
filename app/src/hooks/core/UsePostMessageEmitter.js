import { useState } from 'react';
import WindowService from '../../services/WindowService';

function usePostMessageEmitter(name, initValue) {
	if (!name) {
		throw new Error('name is missing');
	}
	const [value, setValue] = useState(initValue);

	const handleStateChange = newValue => {
		setValue(newValue);
		WindowService.postMessage({ name, content: newValue });
	};

	return [value, handleStateChange];
}

export default usePostMessageEmitter;
