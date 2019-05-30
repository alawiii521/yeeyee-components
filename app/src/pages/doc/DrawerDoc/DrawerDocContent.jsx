import GlobalStyle from '../../../style/GlobalStyle';
import useSlotState from '../../../hooks/settingsHook/UseSlotState';

const defaultDrawerSlot = `
	<yeeyee-drawer-item>Babba</yeeyee-drawer-item>
	<yeeyee-drawer-item>Two</yeeyee-drawer-item>
	<yeeyee-drawer-item>Three</yeeyee-drawer-item>
	<yeeyee-drawer-item>Four</yeeyee-drawer-item>
`;

function DrawerDocContent() {
	const value = useSlotState(defaultDrawerSlot);
	return (
		<div>
			<GlobalStyle />
			<yeeyee-navbar
				dangerouslySetInnerHTML={{ __html: value }}
				name="Drawer"
				type="persistent"
				open
			/>
		</div>
	);
}

export default DrawerDocContent;
export { defaultDrawerSlot };
