import PropTypes from 'prop-types';
import { useState } from 'react';
import WindowService from '../../services/WindowService';
function DropdownSetting(props) {
	const [value, handleOptionChange] = useOptionsState(props.name);
	return (
		<div>
			<select value={value} onChange={handleOptionChange}>
				<OptionList options={props.options} />
			</select>
		</div>
	);
}

function OptionList(props) {
	if (!props.options) {
		return null;
	} else {
		return props.options.map(item => (
			<option key={item} value={item}>
				{item}
			</option>
		));
	}
}

function useOptionsState(name = 'options') {
	const [value, setValue] = useState();

	const handleOptionChange = e => {
		setValue(e.target.value);
		WindowService.postMessage({ name, content: e.target.value });
	};

	return [value, handleOptionChange];
}

DropdownSetting.propTypes = {
	options: PropTypes.array,
	name: PropTypes.string.isRequired,
};

export default DropdownSetting;
