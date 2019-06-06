import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

function DrawerDirty(props) {
	const drawerRef = useRef();

	useEffect(() => {
		if (props.open) {
			drawerRef.current.setAttribute('open', '');
		} else {
			drawerRef.current.removeAttribute('open');
		}
	}, [props.open]);

	return (
		<yeeyee-drawer
			dangerouslySetInnerHTML={{ __html: props.innerHTML }}
			ref={drawerRef}
			alignment={props.alignment}
			offset-top={props.offsetTop}
		/>
	);
}

DrawerDirty.propTypes = {
	open: PropTypes.bool.isRequired,
	alignment: PropTypes.string,
	offsetTop: PropTypes.string,
	innerHTML: PropTypes.string,
};

export default DrawerDirty;
