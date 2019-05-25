const DOC_PATH = '/doc';

const CONTENT_PATH = '/content';

const DRAWER_NAME = '/drawer';
const SWITCH_NAME = '/switch';

// paths to the doc content(the content that will end up in the iframe)
const DRAWER_CONTENT_PATH = `${DOC_PATH}${CONTENT_PATH}${DRAWER_NAME}`;
const SWITCH_CONTENT_PATH = `${DOC_PATH}${CONTENT_PATH}${SWITCH_NAME}`;

// paths to the doc page
const DRAWER_PATH = `${DOC_PATH}${DRAWER_NAME}`;
const SWITCH_PATH = `${DOC_PATH}${SWITCH_NAME}`;

const DocUrls = {
	DOC_PATH,
	CONTENT_PATH,
	DRAWER_CONTENT_PATH,
	SWITCH_CONTENT_PATH,
	DRAWER_PATH,
	SWITCH_PATH,
};

export default DocUrls;
