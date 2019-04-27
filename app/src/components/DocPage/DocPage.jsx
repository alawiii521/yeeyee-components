import { useState } from 'react';
import Drawer from '../../web-componets/Drawer';
import FakeWindow from '../FakeWindow';
import SettingsButton from './SettingsButton';

function DocPage() {
	const [showSettings, setShowSettings] = useState(false);
	const toogleSettings = () => setShowSettings(!showSettings);
	return (
		<div>
			<yeeyee-navbar name="Drawer" type="persistent" open>
				<yeeyee-drawer-item>One</yeeyee-drawer-item>
				<yeeyee-drawer-item>Two</yeeyee-drawer-item>
				<yeeyee-drawer-item>Three</yeeyee-drawer-item>
				<yeeyee-drawer-item>Four</yeeyee-drawer-item>
			</yeeyee-navbar>

			<Drawer open={showSettings} align="right" offsetTop="64px">
				<yeeyee-drawer-item>One</yeeyee-drawer-item>
				<yeeyee-drawer-item>Two</yeeyee-drawer-item>
				<yeeyee-drawer-item>Three</yeeyee-drawer-item>
				<yeeyee-drawer-item>Four</yeeyee-drawer-item>
			</Drawer>

			<FakeWindow width="700px" height="600px">
				<yeeyee-navbar name="Drawer" type="persistent" open>
					<yeeyee-drawer-item>Babba</yeeyee-drawer-item>
					<yeeyee-drawer-item>Two</yeeyee-drawer-item>
					<yeeyee-drawer-item>Three</yeeyee-drawer-item>
					<yeeyee-drawer-item>Four</yeeyee-drawer-item>
				</yeeyee-navbar>
			</FakeWindow>

			<SettingsButton
				showSettings={showSettings}
				toggleSettings={toogleSettings}
			/>
		</div>
	);
}

export default DocPage;
