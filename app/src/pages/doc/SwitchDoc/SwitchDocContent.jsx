import GlobalStyle from '../../../style/GlobalStyle';
import SwitchDocContentStyle from './SwitchDocContent.module.less';
import Switch from '../../../web-components/Switch';
import WindowService from '../../../services/WindowService';
import usePostMessageListenerState from '../../../hooks/core/UsePostMessageListenerState';

function SwitchDocContent() {
	const checked = usePostMessageListenerState('checked', true);

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
