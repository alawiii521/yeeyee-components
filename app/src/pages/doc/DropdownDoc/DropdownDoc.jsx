import DocPage from '../../../components/DocPage/DocPage';
import DocUrls from '../../../constants/DocUrls';
import SlotSetting from '../../../components/SlotSetting/SlotSetting';
import DropdownDocConstant from './DropdownDocConstant';

function DropdownDoc() {
	return (
		<DocPage
			name="Dropdown"
			title="Dropdown"
			contentUrl={DocUrls.Content.DROPDOWN_CONTENT_PATH}
		>
			<SlotSetting
				name={DropdownDocConstant.DEFAULT_SLOT_NAME}
				initValue={DropdownDocConstant.INIT_DEFAULT_SLOT_VALUE}
			/>
		</DocPage>
	);
}

export default DropdownDoc;
