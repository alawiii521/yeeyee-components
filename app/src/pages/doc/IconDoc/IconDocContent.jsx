import IconDocContentStyle from './IconDocContent.module.less';
import usePostMessageListenerState from '../../../hooks/core/UsePostMessageListenerState';
import IconDocConstants from './IconDocConstans';

function IconDocContent() {
	const name = usePostMessageListenerState(
		IconDocConstants.NAME_ATTRIBUTE,
		IconDocConstants.NAME_DEFAULT_VALUE
	);

	const color = usePostMessageListenerState(IconDocConstants.COLOR_ATTRIBUTE);

	const height = usePostMessageListenerState(
		IconDocConstants.HEIGHT_ATTRIBUTE,
		IconDocConstants.DIMENSIONS_DEVAULT_VALUE
	);
	const width = usePostMessageListenerState(
		IconDocConstants.WIDTH_ATTRIBUTE,
		IconDocConstants.DIMENSIONS_DEVAULT_VALUE
	);

	return (
		<div className={IconDocContentStyle.wrapper}>
			<yeeyee-icon name={name} color={color} height={height} width={width} />
		</div>
	);
}

export default IconDocContent;
