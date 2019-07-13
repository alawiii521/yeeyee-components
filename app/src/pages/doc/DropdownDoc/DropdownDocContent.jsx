import GlobalStyle from '../../../style/GlobalStyle';

function DropdownDocContent() {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '95vh',
			}}
		>
			<GlobalStyle />
			<yeeyee-dropdown>
				<option>One</option>
				<option>two</option>
				<option>three</option>
				<option>four</option>
				<option>five</option>
			</yeeyee-dropdown>
		</div>
	);
}

export default DropdownDocContent;
