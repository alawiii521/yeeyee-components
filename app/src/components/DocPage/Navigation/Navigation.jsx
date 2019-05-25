import PropTypes from 'prop-types';
import DrawerItem from '../../../web-components/DrawerItem';
import DocUrls from '../../../constants/DocUrls';

const navigationList = [
	{ content: 'Home', navigateTo: '/' },
	{ content: 'Drawer', navigateTo: DocUrls.DRAWER_PATH },
	{ content: 'Swicth', navigateTo: DocUrls.SWITCH_PATH },
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
					{navigation.content}
				</DrawerItem>
			))}
		</yeeyee-navbar>
	);
}

Navigation.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Navigation;
