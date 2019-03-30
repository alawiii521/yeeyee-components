import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <yeeyee-navbar name="YeeYee" url="/">
          <yeeyee-drawer-item destination="https://hd.se">
            Home
          </yeeyee-drawer-item>
          <yeeyee-drawer-item>Sumo</yeeyee-drawer-item>
          <yeeyee-drawer-item>Menu</yeeyee-drawer-item>
          <yeeyee-drawer-item>Contact</yeeyee-drawer-item>
        </yeeyee-navbar>
        <h1>Hello YeeYee!</h1>
        <yeeyee-button />

        {/* <yeeyee-drawer>
          <yeeyee-drawer-item>Home</yeeyee-drawer-item>
          <yeeyee-drawer-item>Sumo</yeeyee-drawer-item>
          <yeeyee-drawer-item>Menu</yeeyee-drawer-item>
          <yeeyee-drawer-item>Contact</yeeyee-drawer-item>
        </yeeyee-drawer> */}
      </Fragment>
    );
  }
}

export default App;
