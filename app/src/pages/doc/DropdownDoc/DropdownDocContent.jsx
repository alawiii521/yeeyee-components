import GlobalStyle from '../../../style/GlobalStyle';
import usePostMessageListenerState from '../../../hooks/core/UsePostMessageListenerState';
import DropdownDocConstant from './DropdownDocConstant';

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
			<yeeyee-dropdown dangerouslySetInnerHTML={{ __html: slot }} />
			<yeeyee-dropdown dangerouslySetInnerHTML={{ __html: slot }} />
			<yeeyee-dropdown dangerouslySetInnerHTML={{ __html: slot }} />
			<yeeyee-dropdown dangerouslySetInnerHTML={{ __html: slot }} />
			<yeeyee-dropdown dangerouslySetInnerHTML={{ __html: slot }} />
			<yeeyee-dropdown dangerouslySetInnerHTML={{ __html: slot }} />
		</div>
	);
}

export default DropdownDocContent;
