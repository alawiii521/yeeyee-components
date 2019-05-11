import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel="shortcut icon"
						type="image/x-icon"
						href="/static/favicon.ico"
					/>

					<script src="/static/yeeyee-components/yeeyee-button.js" />
					<script src="/static/yeeyee-components/yeeyee-icon.js" />
					<script src="/static/yeeyee-components/yeeyee-button-icon.js" />
					<script src="/static/yeeyee-components/yeeyee-overlay.js" />
					<script src="/static/yeeyee-components/yeeyee-drawer.js" />
					<script src="/static/yeeyee-components/yeeyee-navbar.js" />
					<script src="/static/yeeyee-components/yeeyee-drawer-item.js" />
					<script src="/static/yeeyee-components/yeeyee-number-input.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
