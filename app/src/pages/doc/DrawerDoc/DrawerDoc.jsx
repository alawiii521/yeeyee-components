import GlobalStyle from '../../../style/GlobalStyle';
import Head from 'next/head';

import DocPage from '../../../components/DocPage';

function DrawerDoc() {
	return (
		<div>
			<GlobalStyle />
			<Head>
				<title>Drawer</title>
			</Head>

			<DocPage />
		</div>
	);
}

export default DrawerDoc;
