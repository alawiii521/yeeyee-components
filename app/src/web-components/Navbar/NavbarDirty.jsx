import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import NavbarDocConstants from '../../pages/doc/NavbarDoc/NavbarDocConstants';
function NavbarDirty({ name, url, open, innerHTML, type }) {
	const ref = useRef();

	useEffect(() => {
		if (open) {
			ref.current.setAttribute(NavbarDocConstants.Attributes.Open, '');
		} else {
			ref.current.removeAttribute(NavbarDocConstants.Attributes.Open);
		}
	}, [open]);

	return (
		<yeeyee-navbar
			ref={ref}
			dangerouslySetInnerHTML={{ __html: innerHTML }}
			name={name}
			url={url}
			type={type}
		/>
	);
}

NavbarDirty.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	open: PropTypes.bool,
	type: PropTypes.string,
	innerHTML: PropTypes.string,
};

export default NavbarDirty;
