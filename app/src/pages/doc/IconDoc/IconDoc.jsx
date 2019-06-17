import DocPage from '../../../components/DocPage/DocPage';
import DocUrls from '../../../constants/DocUrls';
import TextSetting from '../../../components/TextSetting/TextSetting';
import IconDocConstants from './IconDocConstans';

function IconDoc() {
	return (
		<DocPage
			name="Icon"
			title="Icon"
			contentUrl={DocUrls.Content.ICON_CONTENT_PATH}
		>
			<TextSetting
				name={IconDocConstants.NAME_ATTRIBUTE}
				initValue={IconDocConstants.NAME_DEFAULT_VALUE}
			/>
			<TextSetting name={IconDocConstants.COLOR_ATTRIBUTE} />
			<TextSetting
				name={IconDocConstants.HEIGHT_ATTRIBUTE}
				initValue={IconDocConstants.DIMENSIONS_DEVAULT_VALUE}
			/>
			<TextSetting
				name={IconDocConstants.WIDTH_ATTRIBUTE}
				initValue={IconDocConstants.DIMENSIONS_DEVAULT_VALUE}
			/>
		</DocPage>
	);
}

export default IconDoc;
