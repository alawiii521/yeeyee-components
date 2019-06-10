import PropTypes from 'prop-types';
import DrawerItem from '../../../web-components/DrawerItem';
import DocUrls from '../../../constants/DocUrls';

const navigationList = [
	{ name: 'Home', navigateTo: '/' },
	{ name: 'Dawer', navigateTo: DocUrls.Main.DRAWER_PATH },
	{ name: 'Swicth', navigateTo: DocUrls.Main.SWITCH_PATH },
];

const handleNavigation = navigateTo => {
	return () => (window.location.href = navigateTo);
};

function Navigation(props) {
	return (
		<yeeyee-navbar name={props.name} type="persistent" open>
			{navigationList.map((navigation, index) => (
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
