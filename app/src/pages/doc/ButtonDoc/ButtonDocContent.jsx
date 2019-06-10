import GlobalStyle from '../../../style/GlobalStyle';
import ButtonDocContentStyle from './ButtonDocContent.module.less';
import usePostMessageListenerState from '../../../hooks/core/UsePostMessageListenerState';
import ButtonDocConstants from './ButtonDocConstants';

function ButtonDocContent() {
	const slotContent = usePostMessageListenerState(
		ButtonDocConstants.DEFAULT_SLOT_NAME,
		ButtonDocConstants.INIT_SLOT_VALUE
	);

	return (
		<div className={ButtonDocContentStyle.wrapper}>
			<GlobalStyle />
			<yeeyee-button>{slotContent}</yeeyee-button>
		</div>
	);
}

export default ButtonDocContent;
