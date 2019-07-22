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
				<option value="one">One</option>
				<option value="two">two</option>
				<option value="three">three</option>
				<option value="four">four</option>
				<option value="five">five</option>
			</yeeyee-dropdown>
		</div>
	);
}

export default DropdownDocContent;
