import GlobalStyle from '../style/GlobalStyle';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
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
      </React.Fragment>
    );
  }
}

export default Home;
