export class LazyBlocks {
	constructor(blocks) {
		this.blocks = document.querySelectorAll(blocks)
						|| document.getElementByClassName('lazy-content');

		for (let block of this.blocks) {
			block.style.opacity = "0";
		}
	}

	onObserve = () => {

		// Checking if IntersectionObserver API is supported

		if ('IntersectionObserver' in window) {
			let observer = new IntersectionObserver( (entries) => {
				for (let entry of entries) {
					if (entry.isIntersecting) {
						let block = entry.target;
						this.show(block);
					}
				}
			})
			for (let block of this.blocks) {
				observer.observe(block);
			}

		// If IntersectionObserver API isn't supported - just showing the blocks

		} else {
			for (let block of this.blocks) {
				this.show(block);
			}
		}
	}

	show = block => {
		block.style.opacity = "1";

		// Adding a class for extra styling

		block.classList.add('fade-in');
	}
}