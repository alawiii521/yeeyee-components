import GlobalStyle from '../../../style/GlobalStyle';
import SwitchDocContentStyle from './SwitchDocContent.module.less';
import Switch from '../../../web-components/Switch';
import WindowService from '../../../services/WindowService';
import useSwitchState from '../../../hooks/settingsHook/UseSwitchState';

function SwitchDocContent() {
	const checked = useSwitchState(true);

	return (
		<div className={SwitchDocContentStyle.wrapper}>
			<GlobalStyle />
			<Switch
				checked={checked}
				handleChange={() =>
					WindowService.postMessage({ checked: !checked }, true)
				}
			/>
		</div>
	);
}

export default SwitchDocContent;
