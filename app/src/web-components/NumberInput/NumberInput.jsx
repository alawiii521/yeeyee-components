import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

function NumberInput(props) {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.addEventListener('yeeyee-input', props.handleInput);
	}, [props.handleInput]);

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
