import DocPage from '../../../components/DocPage';
import DocUrls from '../../../constants/DocUrls';
import SlotSetting from '../../../components/SlotSetting/SlotSetting';
import { defaultDrawerSlot } from '../../doc/DrawerDoc/DrawerDocContent';
import SwitchSetting from '../../../components/SwitchSetting/SwitchSetting';
import DrawerDocConstants from './DrawerDocConstats';
import DropdownSetting from '../../../components/DropdownSetting/DropdownSetting';

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
			contentUrl={DocUrls.DRAWER_CONTENT_PATH}
		>
			<SlotSetting
				initValue={defaultDrawerSlot}
				name={DrawerDocConstants.DEFAULT_SLOT}
			/>
			<SwitchSetting name={DrawerDocConstants.OPEN_ATTRIBUTE} />
			<DropdownSetting
				name={DrawerDocConstants.ALIGNMENT_ATTRIBUTE}
				options={alignmentOptions}
			/>
		</DocPage>
	);
};

export default DrawerDoc;
