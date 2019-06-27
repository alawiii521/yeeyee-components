import React from 'react';
import GlobalStyle from '../../style/GlobalStyle';
import Navigation from '../../components/DocPage/Navigation/Navigation';

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<Navigation name={'Home'} />
			</React.Fragment>
		);
	}
}

export default Home;
