import PropTypes from 'prop-types';
import SlotSettingStyle from './SlotSetting.module.less';
import usePostMessageEmitter from '../../hooks/core/UsePostMessageEmitter';

function SlotSetting(props) {
	const [slotContent, setSlot] = usePostMessageEmitter(
		props.name,
		props.initValue
	);

	return (
		<>
			<h3 className={SlotSettingStyle.name}>{props.name}</h3>
			<div className={SlotSettingStyle.textarea}>
				<textarea onChange={e => setSlot(e.target.value)} value={slotContent} />
			</div>
		</>
	);
}

SlotSetting.propTypes = {
	initValue: PropTypes.string,
	name: PropTypes.string.isRequired,
};

export default SlotSetting;
