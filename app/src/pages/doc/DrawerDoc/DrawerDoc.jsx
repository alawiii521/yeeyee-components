import DocPage from '../../../components/DocPage';
import DocUrls from '../../../constants/DocUrls';
import SlotSetting from '../../../components/SlotSetting/SlotSetting';
import { defaultDrawerSlot } from '../../doc/DrawerDoc/DrawerDocContent';
import SwitchSetting from '../../../components/SwitchSetting/SwitchSetting';
import DrawerDocConstants from './DrawerDocConstats';
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
		</DocPage>
	);
};

export default DrawerDoc;
