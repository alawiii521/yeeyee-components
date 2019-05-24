import GlobalStyle from '../../../style/GlobalStyle';
import SwitchDocContentStyle from './SwitchDocContent.module.less';
import { useEffect, useState } from 'react';
import Switch from '../../../web-components/Switch';
import WindowService from '../../../services/WindowService';

function SwitchDocContent() {
	const [checked, setChecked] = useState(true);
	useEffect(() => {
		const handleEvent = e => {
			setChecked(e.data.checked);
		};

		window.addEventListener('message', handleEvent);

		return () => window.removeEventListener('message', handleEvent);
	}, []);

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
