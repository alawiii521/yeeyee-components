import DocPage from '../../../components/DocPage/DocPage';
import DocUrls from '../../../constants/DocUrls';

function DropdownDoc() {
	return (
		<DocPage
			name="Dropdown"
			title="Dropdown"
			contentUrl={DocUrls.Content.DROPDOWN_CONTENT_PATH}
		/>
	);
}

export default DropdownDoc;
