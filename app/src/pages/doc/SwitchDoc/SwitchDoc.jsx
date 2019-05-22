import DocPage from '../../../components/DocPage';
import DocUrls from '../../../constants/DocUrls';
import DocSwitch from '../../../components/DocSwitch/DocSwitch';

const SwitchDoc = () => {
	return (
		<DocPage title="Switch" name="Switch" contentUrl={DocUrls.SWITCH_PATH}>
			<DocSwitch label="checked" />
		</DocPage>
	);
};

export default SwitchDoc;
