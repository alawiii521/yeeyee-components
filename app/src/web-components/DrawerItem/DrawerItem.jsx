import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function DrawerItem(props) {
	const itemRef = useRef();
	useEffect(() => {
		const current = itemRef.current;
		if (props.handleClick) {
			current.addEventListener('click', props.handleClick);
		}

		return () => current.removeEventListener('click', props.handleClick);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<yeeyee-drawer-item ref={itemRef}>{props.children}</yeeyee-drawer-item>
	);
}

DrawerItem.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
	handleClick: PropTypes.func,
};

export default DrawerItem;
