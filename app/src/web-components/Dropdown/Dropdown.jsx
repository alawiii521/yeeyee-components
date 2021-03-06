import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function Dropdwon({ label, value, children, handleChange }) {
	const ref = useRef();

	useEffect(() => {
		ref.current.addEventListener('yeeyee-change', handleChange);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<yeeyee-dropdown label={label} value={value} ref={ref}>
			{children}
		</yeeyee-dropdown>
	);
}

Dropdwon.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
	handleChange: PropTypes.func,
	value: PropTypes.string,
	label: PropTypes.string,
};

export default Dropdwon;
