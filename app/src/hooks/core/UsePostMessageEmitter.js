import { useState } from 'react';
import WindowService from '../../services/WindowService';

function usePostMessageEmitter(name, initValue) {
	if (!name) {
		throw new Error('name is missing');
	}
	const [value, setValue] = useState(initValue);

	const handleOptionChange = e => {
		setValue(e.target.value);
		WindowService.postMessage({ name, content: e.target.value });
	};

	return [value, handleOptionChange];
}

export default usePostMessageEmitter;
