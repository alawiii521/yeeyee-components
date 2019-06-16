import GlobalStyle from '../../../style/GlobalStyle';
import OverlayDocContentStyle from './OverlayDocContent.module.less';
import Overlay from '../../../web-components/Overlay/Overlay';
import usePostMessageListenerState from '../../../hooks/core/UsePostMessageListenerState';
import WindowService from '../../../services/WindowService';

function OverlayDocContent() {
	const open = usePostMessageListenerState('open', true);
	return (
		<div className={OverlayDocContentStyle.wrapper}>
			<GlobalStyle />
			<Overlay
				open={open}
				handleClose={() => {
					WindowService.postMessage({ open: false }, true);
				}}
			/>
		</div>
	);
}

export default OverlayDocContent;
