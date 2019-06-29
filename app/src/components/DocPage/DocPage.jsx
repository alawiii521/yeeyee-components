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
import Navigation from './Navigation/Navigation';

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

			<Navigation name={props.name} />

			{props.children && (
				<>
					<Drawer open={showSettings} alignment="right" offsetTop="64px">
						<div className={DocPageStyle.settingsPane}>{props.children}</div>
					</Drawer>
					<SettingsButton
						showSettings={showSettings}
						toggleSettings={toggleSettings}
					/>
				</>
			)}

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
					x={x}
					y={y}
					contentUrl={props.contentUrl}
				/>
			</div>
		</div>
	);
}

const useHandleSize = initValue => {
	const [value, setValue] = useState(initValue);

	const handleInput = e => {
		const parsedValue = parseInt(e.target.getInput().value);

		setValue(parsedValue);
	};

	return [value, handleInput];
};

DocPage.propTypes = {
	contentUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default DocPage;
