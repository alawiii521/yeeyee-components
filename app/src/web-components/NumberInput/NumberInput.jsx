import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

function NumberInput(props) {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.addEventListener('yeeyee-input', props.handleInput);

		return () => window.removeEventListener('message', props.handleInput);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<yeeyee-number-input
			ref={inputRef}
			value={props.value}
			label={props.label}
		/>
	);
}

NumberInput.propTypes = {
	value: PropTypes.number,
	handleInput: PropTypes.func,
	label: PropTypes.string,
};

export default NumberInput;
