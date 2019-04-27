import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

function Drawer(props) {
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
			ref={drawerRef}
			align={props.align}
			offset-top={props.offsetTop}
		>
			{props.children}
		</yeeyee-drawer>
	);
}

Drawer.propTypes = {
	open: PropTypes.bool.isRequired,
	align: PropTypes.string,
	offsetTop: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
};

export default Drawer;
