let childWindow = null;

function getChildWindow() {
	if (childWindow) {
		return childWindow;
	} else {
		childWindow = document.querySelector('iframe');
		return childWindow;
	}
}

function getParentWindow() {
	return window.parent;
}

function postMessage(data, toParent = false) {
	if (toParent) {
		window.parent.postMessage(data);
	} else {
		getChildWindow().contentWindow.postMessage(data);
	}
}

const IframeService = {
	getParentWindow,
	getChildWindow,
	postMessage,
};

export default IframeService;
