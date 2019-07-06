import PropTypes from 'prop-types';
import DrawerItem from '../../../web-components/DrawerItem';
import NavigationList from './NavigationList';

const handleNavigation = navigateTo => {
	return () => (window.location.href = navigateTo);
};

function Navigation(props) {
	return (
		<yeeyee-navbar name={props.name} type="persistent" open>
			{NavigationList.map((navigation, index) => (
				<DrawerItem
					key={index}
					handleClick={handleNavigation(navigation.navigateTo)}
				>
					{navigation.name}
				</DrawerItem>
			))}
		</yeeyee-navbar>
	);
}

Navigation.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Navigation;
