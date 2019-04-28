import PropTypes from 'prop-types';
import { useState } from 'react';
import Drawer from '../../web-componets/Drawer';
import FakeWindow from '../FakeWindow';
import SettingsButton from './SettingsButton';
import useToggleState from '../../hooks/useToggleState';

function DocPage(props) {
	const [showSettings, toggleSettings] = useToggleState(false);
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

			<FakeWindow width="700px" height="600px" contentUrl={props.contentUrl} />

			<SettingsButton
				showSettings={showSettings}
				toggleSettings={toggleSettings}
			/>
		</div>
	);
}

DocPage.propTypes = {
	contentUrl: PropTypes.string.isRequired,
};

export default DocPage;
