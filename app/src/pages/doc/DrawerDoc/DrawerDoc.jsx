import GlobalStyle from '../../../style/GlobalStyle';
import Head from 'next/head';

function DrawerDoc() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Head>
        <title>Drawer</title>
      </Head>
      <yeeyee-navbar name="Drawer" type="persistent">
        <yeeyee-drawer-item>One</yeeyee-drawer-item>
        <yeeyee-drawer-item>Two</yeeyee-drawer-item>
        <yeeyee-drawer-item>Three</yeeyee-drawer-item>
        <yeeyee-drawer-item>Four</yeeyee-drawer-item>
      </yeeyee-navbar>
    </React.Fragment>
  );
}

export default DrawerDoc;
