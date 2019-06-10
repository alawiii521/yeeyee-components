const DOC_PATH = '/doc';

const CONTENT_PATH = '/content';

const DRAWER_NAME = '/drawer';
const SWITCH_NAME = '/switch';
const BUTTON_NAME = '/button';

// paths to the doc content(the content that will end up in the iframe)
const DRAWER_CONTENT_PATH = `${DOC_PATH}${CONTENT_PATH}${DRAWER_NAME}`;
const SWITCH_CONTENT_PATH = `${DOC_PATH}${CONTENT_PATH}${SWITCH_NAME}`;
const BUTTON_CONTENT_PATH = `${DOC_PATH}${CONTENT_PATH}${BUTTON_NAME}`;

// paths to the doc page
const DRAWER_PATH = `${DOC_PATH}${DRAWER_NAME}`;
const SWITCH_PATH = `${DOC_PATH}${SWITCH_NAME}`;
const BUTTON_PATH = `${DOC_PATH}${BUTTON_NAME}`;

const DocUrls = {
	DOC_PATH,
	CONTENT_PATH,
	Content: {
		DRAWER_CONTENT_PATH,
		SWITCH_CONTENT_PATH,
		BUTTON_CONTENT_PATH,
	},
	Main: {
		DRAWER_PATH,
		SWITCH_PATH,
		BUTTON_PATH,
	},
};

export default DocUrls;
