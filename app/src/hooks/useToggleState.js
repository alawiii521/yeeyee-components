import { useState } from 'react';

const useToggleState = initValue => {
	const [state, setState] = useState(initValue);
	return [state, () => setState(!state)];
};

export default useToggleState;
