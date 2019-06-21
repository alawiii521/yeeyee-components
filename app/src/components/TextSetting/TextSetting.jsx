import PropTypes from 'prop-types';
import TextSettingStyle from './TextSetting.module.less';
import usePostMessageEmitter from '../../hooks/core/UsePostMessageEmitter';
import useMessageListener from '../../hooks/core/UseMessageListener';

function TextSetting(props) {
	const initValue = props.initValue || '';
	const [value, setValue] = usePostMessageEmitter(props.name, initValue);

	const handleMessage = e => {
		if (e.data[props.name] !== undefined) {
			setValue(e.data[props.name]);
		}
	};

	useMessageListener(handleMessage);

	return (
		<div className={TextSettingStyle.wrapper}>
			<label>{props.name}</label>
			<input
				value={value}
				type="text"
				onChange={e => setValue(e.target.value)}
			/>
		</div>
	);
}

TextSetting.propTypes = {
	name: PropTypes.string.isRequired,
	initValue: PropTypes.string,
};

export default TextSetting;
