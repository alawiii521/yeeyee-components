import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import NavbarDocConstants from '../../pages/doc/NavbarDoc/NavbarDocConstants';
function Navbar({ name, url, open, children, type }) {
	const ref = useRef();

	useEffect(() => {
		if (open) {
			ref.current.setAttribute(NavbarDocConstants.Attributes.Open, '');
		} else {
			ref.current.removeAttribute(NavbarDocConstants.Attributes.Open);
		}
	}, [open]);

	return (
		<yeeyee-navbar ref={ref} name={name} url={url} type={type}>
			{children}
		</yeeyee-navbar>
	);
}

Navbar.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	open: PropTypes.bool,
	type: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

export default Navbar;
