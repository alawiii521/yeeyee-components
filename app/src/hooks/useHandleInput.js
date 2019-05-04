import { useState } from 'react';

const useHandleInput = initValue => {
	const [state, setState] = useState(initValue);

	const handleInput = e => setState(e.target.value);

	return [state, handleInput];
};

export default useHandleInput;
