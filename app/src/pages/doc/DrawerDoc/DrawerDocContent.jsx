import GlobalStyle from '../../../style/GlobalStyle';
import useSlotState from '../../../hooks/settingsHook/UseSlotState';

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
	const slot = useSlotState('slot', defaultDrawerSlot);
	return (
		<div>
			<GlobalStyle />
			<yeeyee-drawer
				dangerouslySetInnerHTML={{ __html: slot }}
				name="Drawer"
				type="persistent"
				open
			/>
		</div>
	);
}

export default DrawerDocContent;
export { defaultDrawerSlot };
