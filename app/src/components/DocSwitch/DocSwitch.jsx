import Switch from '../../web-components/Switch';
import DocSwitchStyle from './DocSwitch.module.less';

function DocSwitch() {
	return (
		<div className={DocSwitchStyle.wrapper}>
			<Switch />
		</div>
	);
}

export default DocSwitch;
