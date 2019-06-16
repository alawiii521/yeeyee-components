import DocPage from '../../../components/DocPage';
import DocUrls from '../../../constants/DocUrls';
import SwitchSetting from '../../../components/SwitchSetting';

function OverlayDoc() {
	return (
		<DocPage
			name="Overlay"
			title="Overlay"
			contentUrl={DocUrls.Content.OVERLAY_CONTENT_PATH}
		>
			<SwitchSetting name="open" />
		</DocPage>
	);
}

export default OverlayDoc;
