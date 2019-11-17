import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function Overlay({ open, handleClose }) {
	const ref = useRef();

	useEffect(() => {
		ref.current.addEventListener('close', handleClose);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (open) {
			ref.current.setAttribute('open', '');
		} else {
			ref.current.removeAttribute('open');
		}
	}, [open]);

	return <yeeyee-overlay ref={ref} />;
}

Overlay.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func,
};

export default Overlay;
