import GlobalStyle from '../../../style/GlobalStyle';
import DrawerDirty from '../../../web-components/Drawer/DrawerDirty';
import DrawerDocConstants from './DrawerDocConstats';
import usePostMessageListenerState from '../../../hooks/core/UsePostMessageListenerState';

const defaultDrawerSlot = `
<yeeyee-drawer-item>
	Babba
</yeeyee-drawer-item>

<yeeyee-drawer-item>
	Two
</yeeyee-drawer-item>

<yeeyee-drawer-item>
	Three
</yeeyee-drawer-item>

<yeeyee-drawer-item>
	Four
</yeeyee-drawer-item>
`;

function DrawerDocContent() {
	const slot = usePostMessageListenerState(
		DrawerDocConstants.DEFAULT_SLOT,
		defaultDrawerSlot
	);
	const open = usePostMessageListenerState(
		DrawerDocConstants.OPEN_ATTRIBUTE,
		true
	);
	const alignment = usePostMessageListenerState(
		DrawerDocConstants.ALIGNMENT_ATTRIBUTE,
		'left'
	);

	return (
		<div>
			<GlobalStyle />
			<DrawerDirty alignment={alignment} open={open} innerHTML={slot} />
		</div>
	);
}

export default DrawerDocContent;
export { defaultDrawerSlot };
