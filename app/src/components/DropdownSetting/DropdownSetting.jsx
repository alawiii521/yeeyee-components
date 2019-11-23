import PropTypes from 'prop-types';
import DropdownSettingStyle from './DropdownSetting.module.less';
import usePostMessageEmitter from '../../hooks/core/UsePostMessageEmitter';
import Dropdown from '../../web-components//Dropdown';

function DropdownSetting(props) {
	const [value, handleOptionChange] = usePostMessageEmitter(props.name);
	return (
		<div className={DropdownSettingStyle.wrapper}>
			<Dropdown
				label={props.name}
				value={value}
				handleChange={e => handleOptionChange(e.detail.value)}
			>
				<OptionList options={props.options} />
			</Dropdown>
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

DropdownSetting.propTypes = {
	options: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
};

export default DropdownSetting;
