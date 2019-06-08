import GlobalStyle from '../../../style/GlobalStyle';
import SwitchDocContentStyle from './SwitchDocContent.module.less';
import Switch from '../../../web-components/Switch';
import WindowService from '../../../services/WindowService';
import usePostMessageState from '../../../hooks/core/UsePostMessageState';

function SwitchDocContent() {
	const checked = usePostMessageState('checked', true);

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
