export class LazyImages {
	constructor(images) {
		this.images = document.querySelectorAll(images)
						|| document.getElementByClassName('.lazy-img');
	}

	onObserve = () => {

		// Checking if IntersectionObserver API is supported

		if ('IntersectionObserver' in window) {
			let observer = new IntersectionObserver( (entries) => {
				for (let entry of entries) {
					if (entry.isIntersecting) {
						let img = entry.target;
						this.show(img);
					}
				}
			})
			for (let img of this.images) {
				observer.observe(img);
			}
		} else {

			// If IntersectionObserver API isn't supported - loading the images all at once

			for (let img of this.images) {
				this.show(img);
			}
		}
	}

	onEvent = event => {
		this.event = event || 'click';

		for (let img of this.images) {
			img.addEventListener(this.event, () => {
				this.show(img);
			});
		}
	}

	show = img => {

		// If image has the class, but doesn't have the data-src attribute, it is ignored

		if (!img.dataset.src) return;
		img.src = img.dataset.src;
	}
}