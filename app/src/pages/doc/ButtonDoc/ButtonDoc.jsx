import React from 'react';
import GlobalStyle from '../../../style/GlobalStyle';
import Head from 'next/head';

function ButtonDoc() {
	return (
		<React.Fragment>
			<Head>
				<title>Button</title>
			</Head>
			<GlobalStyle />
			<yeeyee-navbar name="Button" url="/">
				<yeeyee-drawer-item>Home</yeeyee-drawer-item>
				<yeeyee-drawer-item>Documentation</yeeyee-drawer-item>
			</yeeyee-navbar>
		</React.Fragment>
	);
}

export default ButtonDoc;
