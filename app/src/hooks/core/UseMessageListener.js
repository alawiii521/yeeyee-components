import { useEffect } from 'react';

function useMessageListener(handleEvent) {
	useEffect(() => {
		window.addEventListener('message', handleEvent);

		return () => window.removeEventListener('message', handleEvent);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}

export default useMessageListener;
