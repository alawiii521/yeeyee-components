import PropTypes from 'prop-types';
import Drawer from '../../web-componets/Drawer';
import FakeWindow from '../FakeWindow';
import SettingsButton from './SettingsButton';
import WindowSettings from './WindowSettings';
import DocPageStyle from './DocPage.module.less';
import useToggleState from '../../hooks/useToggleState';
import { useToggleOrientation } from '../FakeWindow/FakeWindowHooks';
import { WindowOrientation } from '../../constants/WindowConstants';

function DocPage(props) {
	const [showSettings, toggleSettings] = useToggleState(false);
	const [orientationState, toggleOrientation] = useToggleOrientation(
		WindowOrientation.LANDSCAPE
	);

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

			<div className={DocPageStyle.windowWrapper}>
				<WindowSettings toggleOrientation={toggleOrientation} />
				<FakeWindow
					orientation={orientationState}
					x="400px"
					y="600px"
					contentUrl={props.contentUrl}
				/>
			</div>

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
