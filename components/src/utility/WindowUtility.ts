function hasParent(): boolean {
	return window.parent !== window;
}

const WidnowUtility = { hasParent };

export default WidnowUtility;
