import DocPage from '../../../components/DocPage/DocPage';
import DocUrls from '../../../constants/DocUrls';
import SlotSetting from '../../../components/SlotSetting/SlotSetting';
import NavbarDocConstants from './NavbarDocConstants';
import TextSetting from '../../../components/TextSetting/TextSetting';
import SwitchSetting from '../../../components/SwitchSetting/SwitchSetting';
import DropdownSetting from '../../../components/DropdownSetting/DropdownSetting';

let typeOptions = [];

if (typeof window !== 'undefined') {
	typeOptions = Object.values(window.customElements.get('yeeyee-navbar').Type);
}

function NavbarDoc() {
	return (
		<DocPage
			name="Navbar"
			title="Navbar"
			contentUrl={DocUrls.Content.NAVBAR_CONTENT_PATH}
		>
			<TextSetting
				name={NavbarDocConstants.Attributes.Name}
				initValue={NavbarDocConstants.DefaultValues.Name}
			/>
			<TextSetting name={NavbarDocConstants.Attributes.Url} />
			<SlotSetting
				name={NavbarDocConstants.Slots.DefaultSlot}
				initValue={NavbarDocConstants.DefaultValues.DefaultSlot}
			/>
			<SwitchSetting
				name={NavbarDocConstants.Attributes.Open}
				initValue={NavbarDocConstants.DefaultValues.Open}
			/>
			<DropdownSetting
				name={NavbarDocConstants.Attributes.Type}
				options={typeOptions}
			/>
		</DocPage>
	);
}

export default NavbarDoc;
