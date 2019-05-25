import DocPage from '../../../components/DocPage';
import DocUrls from '../../../constants/DocUrls';
import SwitchSetting from '../../../components/SwitchSetting';

const SwitchDoc = () => {
	return (
		<DocPage title="Switch" name="Switch" contentUrl={DocUrls.SWITCH_PATH}>
			<SwitchSetting label="checked" />
		</DocPage>
	);
};

export default SwitchDoc;
