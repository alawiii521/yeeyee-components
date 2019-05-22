import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function Switch({ handleChange, checked }) {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.addEventListener('change', handleChange);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (checked) {
			inputRef.current.setAttribute('checked', '');
		} else {
			inputRef.current.removeAttribute('checked');
		}
	}, [checked]);

	return <yeeyee-switch ref={inputRef} />;
}

Switch.propTypes = {
	checked: PropTypes.bool,
	handleChange: PropTypes.func,
};

export default Switch;
