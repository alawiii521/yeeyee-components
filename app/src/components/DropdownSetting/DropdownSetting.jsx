import PropTypes from 'prop-types';
import DropdownSettingStyle from './DropdownSetting.module.less';
import usePostMessageEmitter from '../../hooks/core/UsePostMessageEmitter';

function DropdownSetting(props) {
	const [value, handleOptionChange] = usePostMessageEmitter(props.name);
	return (
		<div className={DropdownSettingStyle.wrapper}>
			<label>{props.name}</label>
			<select value={value} onChange={e => handleOptionChange(e.target.value)}>
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

DropdownSetting.propTypes = {
	options: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
};

export default DropdownSetting;
