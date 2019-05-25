import { useReducer } from 'react';

const TOGGLE = 'TOGGLE';

const toggleAction = {
	type: TOGGLE,
};

function reducer(state, action) {
	if (action.type === TOGGLE) {
		const newState = {
			checked: !state.checked,
		};
		return newState;
	} else {
		throw new Error();
	}
}

function UseToggleReducer(initValue = false) {
	const [state, dispatch] = useReducer(reducer, { checked: initValue });

	const toggleState = () => {
		dispatch(toggleAction);
	};
	return [state.checked, toggleState];
}

export default UseToggleReducer;
