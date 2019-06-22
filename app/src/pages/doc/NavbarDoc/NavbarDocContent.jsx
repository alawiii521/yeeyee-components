import GlobalStyle from '../../../style/GlobalStyle';
import usePostMessageListenerState from '../../../hooks/core/UsePostMessageListenerState';
import NavbarDocConstants from './NavbarDocConstants';
import NavbarDirty from '../../../web-components/Navbar/NavbarDirty';
import { useEffect, useRef } from 'react';
import WindowService from '../../../services/WindowService';

function NavbarDocContent() {
	const ref = useRef();
	const slot = usePostMessageListenerState(
		NavbarDocConstants.Slots.DefaultSlot,
		NavbarDocConstants.DefaultValues.DefaultSlot
	);

	const name = usePostMessageListenerState(
		NavbarDocConstants.Attributes.Name,
		NavbarDocConstants.DefaultValues.Name
	);

	const url = usePostMessageListenerState(NavbarDocConstants.Attributes.Url);

	const open = usePostMessageListenerState(
		NavbarDocConstants.Attributes.Open,
		NavbarDocConstants.DefaultValues.Open
	);

	const type = usePostMessageListenerState(
		NavbarDocConstants.Attributes.Type,
		NavbarDocConstants.DefaultValues.Type
	);

	useEffect(() => {
		ref.current.addEventListener('yeeyee-open', e => {
			WindowService.postMessage({ open: e.detail.open }, true);
		});
	}, []);

	return (
		<div ref={ref}>
			<GlobalStyle />
			<NavbarDirty
				name={name}
				url={url}
				type={type}
				open={open}
				innerHTML={slot}
			/>
		</div>
	);
}

export default NavbarDocContent;
