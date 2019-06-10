import React from 'react';
import DocPage from '../../../components/DocPage';
import DocUrls from '../../../constants/DocUrls';
import SlotSetting from '../../../components/SlotSetting';
import ButtonDocConstants from './ButtonDocConstants';

function ButtonDoc() {
	return (
		<DocPage
			title="Button"
			name="Button"
			contentUrl={DocUrls.Content.BUTTON_CONTENT_PATH}
		>
			<SlotSetting
				initValue={ButtonDocConstants.INIT_SLOT_VALUE}
				name={ButtonDocConstants.DEFAULT_SLOT_NAME}
			/>
		</DocPage>
	);
}

export default ButtonDoc;
