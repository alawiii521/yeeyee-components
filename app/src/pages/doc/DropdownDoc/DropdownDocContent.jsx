import { useState } from 'react';
import GlobalStyle from '../../../style/GlobalStyle';
import usePostMessageListenerState from '../../../hooks/core/UsePostMessageListenerState';
import DropdownDocConstant from './DropdownDocConstant';
import Dropdown from '../../../web-components//Dropdown//DropdownDirty';

function DropdownDocContent() {
	const slot = usePostMessageListenerState(
		DropdownDocConstant.DEFAULT_SLOT_NAME,
		DropdownDocConstant.INIT_DEFAULT_SLOT_VALUE
	);

	const [value, setValue] = useState();

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
			{Array(5)
				.fill({
					value: value,
					handleChange: e => setValue(e.detail.value),
					innerHTML: slot,
				})
				.map((dropdownProps, index) => {
					dropdownProps.key = index;
					return <Dropdown key={index} {...dropdownProps} />;
				})}
		</div>
	);
}

export default DropdownDocContent;
