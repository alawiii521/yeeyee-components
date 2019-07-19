class TransitionState {
	private elementGetter: () => HTMLElement;
	private element: HTMLElement;

	public constructor(elementGetter: () => HTMLElement) {
		this.elementGetter = elementGetter;
	}

	/**
	 *
	 * @param {string} classObject.newClass The class that will be added to the element returned by the elementGetter function
	 * @param {string} classObject.oldClass The class that will be removed from the element returned by the elementGetter function
	 * @param {number} delay Adds the class after the delay(milliseconds)
	 */
	public applyTransition(classObject: TransitionClass, delay?: number): void {
		if (!classObject) {
			return;
		}

		if (delay || delay === 0) {
			setTimeout((): void => this.getElement().classList.add(classObject.newClass), delay);
		} else {
			this.getElement().classList.add(classObject.newClass);
		}

		if (classObject.oldClass) {
			this.getElement().classList.remove(classObject.oldClass);
		}
	}

	public removeTransition(className: string, delay: number | null, callback: () => void): void {
		this.getElement().classList.remove(className);
		if (callback && delay !== null) {
			setTimeout((): void => {
				callback();
			}, delay);
		}
	}

	private getElement(): HTMLElement {
		return this.element ? this.element : this.elementGetter();
	}
}

interface TransitionClass {
	newClass?: string;
	oldClass?: string;
}

export default TransitionState;
