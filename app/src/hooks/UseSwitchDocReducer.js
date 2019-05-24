import { useReducer } from 'react';
import WindowService from '../services/WindowService';
const SWITCH_DOC_TOGGLE = 'SWITCH_DOC_TOGGLE';

const toggleAction = {
	type: SWITCH_DOC_TOGGLE,
};

function reducer(state, action) {
	switch (action.type) {
		case SWITCH_DOC_TOGGLE: {
			const newState = {
				checked: !state.checked,
			};
			WindowService.postMessage(newState);
			return newState;
		}
		default:
			throw new Error();
	}
}

function UseSwitchDocReducer(initValue = false) {
	const [state, dispatch] = useReducer(reducer, { checked: initValue });

	const toggleState = () => {
		dispatch(toggleAction);
	};
	return [state.checked, toggleState];
}

export default UseSwitchDocReducer;
