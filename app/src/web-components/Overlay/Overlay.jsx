import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function Overlay({ open, handleClose }) {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.addEventListener('close', handleClose);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (open) {
			inputRef.current.setAttribute('open', '');
		} else {
			inputRef.current.removeAttribute('open');
		}
	}, [open]);

	return <yeeyee-overlay ref={inputRef} />;
}

Overlay.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func,
};

export default Overlay;
