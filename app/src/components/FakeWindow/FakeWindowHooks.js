import { useState } from 'react';
import { WindowOrientation } from '../../constants/WindowConstants';

const useToggleOrientation = (
	initOrientation = WindowOrientation.LANDSCAPE
) => {
	const [orientation, setOrientation] = useState(initOrientation);

	const toggleOrientation = () => {
		if (orientation === WindowOrientation.LANDSCAPE) {
			setOrientation(WindowOrientation.PORTRAIT);
		} else if (orientation === WindowOrientation.PORTRAIT) {
			setOrientation(WindowOrientation.LANDSCAPE);
		}
	};
	return [orientation, toggleOrientation];
};

export { useToggleOrientation };
