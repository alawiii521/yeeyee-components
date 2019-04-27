import GlobalStyle from '../../../style/GlobalStyle';

function DrawerDocContent() {
	return (
		<div>
			<GlobalStyle />
			<yeeyee-navbar name="Drawer" type="persistent" open>
				<yeeyee-drawer-item>Babba</yeeyee-drawer-item>
				<yeeyee-drawer-item>Two</yeeyee-drawer-item>
				<yeeyee-drawer-item>Three</yeeyee-drawer-item>
				<yeeyee-drawer-item>Four</yeeyee-drawer-item>
			</yeeyee-navbar>
		</div>
	);
}

export default DrawerDocContent;
