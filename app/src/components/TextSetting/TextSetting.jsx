import PropTypes from 'prop-types';
import TextSettingStyle from './TextSetting.module.less';
import usePostMessageEmitter from '../../hooks/core/UsePostMessageEmitter';

function TextSetting(props) {
	const initValue = props.initValue || '';
	const [value, setValue] = usePostMessageEmitter(props.name, initValue);

	return (
		<div className={TextSettingStyle.wrapper}>
			<label>{props.name}</label>
			<input value={value} type="text" onChange={setValue} />
		</div>
	);
}

TextSetting.propTypes = {
	name: PropTypes.string.isRequired,
	initValue: PropTypes.string,
};

export default TextSetting;
