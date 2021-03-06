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

					{/* components */}
					<script src="/static/yeeyee-components/yeeyee-dropdown.js" />
					<script src="/static/yeeyee-components/yeeyee-button.js" />
					<script src="/static/yeeyee-components/yeeyee-icon.js" />
					<script src="/static/yeeyee-components/yeeyee-icon-button.js" />
					<script src="/static/yeeyee-components/yeeyee-overlay.js" />
					<script src="/static/yeeyee-components/yeeyee-drawer.js" />
					<script src="/static/yeeyee-components/yeeyee-navbar.js" />
					<script src="/static/yeeyee-components/yeeyee-drawer-item.js" />
					<script src="/static/yeeyee-components/yeeyee-number-input.js" />
					<script src="/static/yeeyee-components/yeeyee-switch.js" />
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
