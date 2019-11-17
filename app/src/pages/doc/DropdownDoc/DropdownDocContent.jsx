import GlobalStyle from '../../../style/GlobalStyle';
import usePostMessageListenerState from '../../../hooks/core/UsePostMessageListenerState';
import DropdownDocConstant from './DropdownDocConstant';
import Dropdown from '../../../web-components//Dropdown//DropdownDirty';

function DropdownDocContent() {
	const slot = usePostMessageListenerState(
		DropdownDocConstant.DEFAULT_SLOT_NAME,
		DropdownDocConstant.INIT_DEFAULT_SLOT_VALUE
	);

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				flexDirection: 'column',
				height: '150vh',
				padding: '2rem',
				boxSizing: 'border-box',
			}}
		>
			<GlobalStyle />
			<Dropdown innerHTML={slot} />
			<Dropdown innerHTML={slot} />
			<Dropdown innerHTML={slot} />
			<Dropdown innerHTML={slot} />
			<Dropdown innerHTML={slot} />
			<Dropdown innerHTML={slot} />
		</div>
	);
}

export default DropdownDocContent;
