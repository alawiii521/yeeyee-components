import GlobalStyle from '../../../style/GlobalStyle';
import SwitchDocContentStyle from './SwitchDocContent.module.less';

function SwitchDocContent() {
	return (
		<div className={SwitchDocContentStyle.wrapper}>
			<GlobalStyle />
			<yeeyee-switch />
		</div>
	);
}

export default SwitchDocContent;
