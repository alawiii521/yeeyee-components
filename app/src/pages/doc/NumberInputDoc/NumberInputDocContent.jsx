import NumberInput from '../../../web-components/NumberInput';
import usePostMessageListenerState from '../../../hooks/core/UsePostMessageListenerState';
import GlobalStyle from '../../../style/GlobalStyle';
import NumberInputDocContentStyle from './NumberInputDocContent.module.less';
import NumberInputDocConstants from './NumberInputDocConstants';
import WindowService from '../../../services/WindowService';

function NumberInputDocContent() {
	const value = usePostMessageListenerState(
		NumberInputDocConstants.VALUE_ATTRIBUTE,
		NumberInputDocConstants.VALUE_DEFAULT_VALUE
	);
	const label = usePostMessageListenerState(
		NumberInputDocConstants.LABEL_ATTRIBUTE,
		NumberInputDocConstants.LABEL_DEFAULT_VALUE
	);

	return (
		<div className={NumberInputDocContentStyle.wrapper}>
			<GlobalStyle />
			<NumberInput
				label={label}
				value={value ? parseInt(value) : ''}
				handleInput={e => {
					console.log(e.target.getInput().value);
					WindowService.postMessage({ value: e.target.getInput().value }, true);
				}}
			/>
		</div>
	);
}

export default NumberInputDocContent;
