import DocPage from '../../../components/DocPage/DocPage';
import TextSetting from '../../../components/TextSetting/TextSetting';
import DocUrls from '../../../constants/DocUrls';
import NumberInputDocConstant from './NumberInputDocConstants';

function NumberInputDoc() {
	return (
		<DocPage
			name="NumberInput"
			title="NumberInput"
			contentUrl={DocUrls.Content.NUMBER_INPUT_CONTENT_PATH}
		>
			<TextSetting
				name={NumberInputDocConstant.VALUE_ATTRIBUTE}
				initValue={NumberInputDocConstant.VALUE_DEFAULT_VALUE}
			/>
			<TextSetting
				name={NumberInputDocConstant.LABEL_ATTRIBUTE}
				initValue={NumberInputDocConstant.LABEL_DEFAULT_VALUE}
			/>
		</DocPage>
	);
}

export default NumberInputDoc;
