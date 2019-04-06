import GlobalStyle from '../../../style/GlobalStyle';
import Head from 'next/head';
import { useState } from 'react';
import Drawer from '../../../web-componets/Drawer';
import SettingsButton from './SettingsButton';

function DrawerDoc() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Drawer</title>
      </Head>

      <yeeyee-navbar name="Drawer" type="persistent" open>
        <yeeyee-drawer-item>One</yeeyee-drawer-item>
        <yeeyee-drawer-item>Two</yeeyee-drawer-item>
        <yeeyee-drawer-item>Three</yeeyee-drawer-item>
        <yeeyee-drawer-item>Four</yeeyee-drawer-item>
      </yeeyee-navbar>

      <Drawer open={showSettings} align="right" offsetTop="64px">
        <yeeyee-drawer-item>One</yeeyee-drawer-item>
        <yeeyee-drawer-item>Two</yeeyee-drawer-item>
        <yeeyee-drawer-item>Three</yeeyee-drawer-item>
        <yeeyee-drawer-item>Four</yeeyee-drawer-item>
      </Drawer>

      <SettingsButton
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
    </div>
  );
}

export default DrawerDoc;
