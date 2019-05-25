import Head from 'next/head';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Drawer from '../../web-components/Drawer';
import FakeWindow from '../FakeWindow';
import SettingsButton from './SettingsButton';
import WindowSettings from './WindowSettings';
import DocPageStyle from './DocPage.module.less';
import UseToggleReducer from '../../hooks/core/UseToggleReducer';
import { useToggleOrientation } from '../FakeWindow/FakeWindowHooks';
import { WindowOrientation } from '../../constants/WindowConstants';
import GlobalStyle from '../../style/GlobalStyle';

const DEFAULT_X = 800;
const DEFAULT_Y = 600;

const MIN_SIZE = 200;

function DocPage(props) {
	const [showSettings, toggleSettings] = UseToggleReducer(true);
	const [orientationState, toggleOrientation] = useToggleOrientation(
		WindowOrientation.LANDSCAPE
	);
	const [x, handleX] = useHandleSize(DEFAULT_X);
	const [y, handleY] = useHandleSize(DEFAULT_Y);

	return (
		<div>
			<GlobalStyle />
			<Head>
				<title>{props.title}</title>
			</Head>

			<yeeyee-navbar name={props.name} type="persistent" open>
				<yeeyee-drawer-item>One</yeeyee-drawer-item>
				<yeeyee-drawer-item>Two</yeeyee-drawer-item>
				<yeeyee-drawer-item>Three</yeeyee-drawer-item>
				<yeeyee-drawer-item>Four</yeeyee-drawer-item>
			</yeeyee-navbar>

			<Drawer open={showSettings} alignment="right" offsetTop="64px">
				<div className={DocPageStyle.settingsPane}>{props.children}</div>
			</Drawer>

			<div className={DocPageStyle.windowWrapper}>
				<WindowSettings
					x={x}
					y={y}
					handleX={handleX}
					handleY={handleY}
					toggleOrientation={toggleOrientation}
				/>
				<FakeWindow
					orientation={orientationState}
					x={x + 'px'}
					y={y + 'px'}
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

const useHandleSize = initValue => {
	const [value, setValue] = useState(initValue);

	const handleInput = e => {
		const parsedValue = parseInt(e.target.getInput().value);
		if (parsedValue && parsedValue > MIN_SIZE) {
			setValue(parsedValue);
		} else {
			setValue(200);
		}
	};

	return [value, handleInput];
};

DocPage.propTypes = {
	contentUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default DocPage;
