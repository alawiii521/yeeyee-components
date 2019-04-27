import GlobalStyle from '../../../style/GlobalStyle';
import Head from 'next/head';

import DocPage from '../../../components/DocPage';
import DocUrls from '../../../constants/DocUrls';

function DrawerDoc() {
	return (
		<div>
			<GlobalStyle />
			<Head>
				<title>Drawer</title>
			</Head>

			<DocPage contentUrl={DocUrls.DRAWER_PATH} />
		</div>
	);
}

export default DrawerDoc;
