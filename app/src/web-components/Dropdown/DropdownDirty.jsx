import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function DropdwonDirty({ label, value, handleChange, innerHTML }) {
	const ref = useRef();

	useEffect(() => {
		ref.current.addEventListener('yeeyee-change', handleChange);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<yeeyee-dropdown
			ref={ref}
			label={label}
			value={value}
			dangerouslySetInnerHTML={{ __html: innerHTML }}
		></yeeyee-dropdown>
	);
}

DropdwonDirty.propTypes = {
	handleChange: PropTypes.func,
	innerHTML: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string,
};

export default DropdwonDirty;
