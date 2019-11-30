export class Modal {
	constructor(settings) {
		this.modal = document.querySelector(settings.modal)
						|| document.querySelector('#modal');

		this.modalShow = document.querySelector(settings.modalShow)
							|| document.querySelector('#modalShow');

		this.modalHide = document.querySelector(settings.modalHide)
							|| document.querySelector('#modalHide');

		this.event = settings.event || "click";
	}

	init = () => {
		this.modalShow.addEventListener(this.event, this.show, false);

		this.modalHide.addEventListener(this.event, this.hide, false);

		// If clicked on the overlay (outside the modal box)

		window.addEventListener(this.event, event => {
			if (event.target == this.modal) {
				this.hide();
			}
		})
	}

	show = () => {
		this.modal.classList.add('opened');
	}

	hide = () => {
		this.modal.classList.remove('opened');
	}
}