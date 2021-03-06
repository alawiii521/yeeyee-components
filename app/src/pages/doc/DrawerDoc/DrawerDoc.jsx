import DocPage from '../../../components/DocPage';
import DocUrls from '../../../constants/DocUrls';
import SlotSetting from '../../../components/SlotSetting';
import { defaultDrawerSlot } from '../../doc/DrawerDoc/DrawerDocContent';
import SwitchSetting from '../../../components/SwitchSetting/SwitchSetting';
import DrawerDocConstants from './DrawerDocConstats';
import DropdownSetting from '../../../components/DropdownSetting/DropdownSetting';
import TextSetting from '../../../components/TextSetting';

let alignmentOptions = [];

if (typeof window !== 'undefined') {
	alignmentOptions = Object.values(
		window.customElements.get('yeeyee-drawer').Alignment
	);
}

const DrawerDoc = () => {
	return (
		<DocPage
			title="Drawer"
			name="Drawer"
			contentUrl={DocUrls.Content.DRAWER_CONTENT_PATH}
		>
			<SlotSetting
				initValue={defaultDrawerSlot}
				name={DrawerDocConstants.DEFAULT_SLOT}
			/>
			<SwitchSetting
				name={DrawerDocConstants.OPEN_ATTRIBUTE}
				initValue={true}
			/>
			<DropdownSetting
				name={DrawerDocConstants.ALIGNMENT_ATTRIBUTE}
				options={alignmentOptions}
			/>
			<TextSetting name={DrawerDocConstants.OFFSET_TOP_ATTRIBUTE} />
		</DocPage>
	);
};

export default DrawerDoc;
