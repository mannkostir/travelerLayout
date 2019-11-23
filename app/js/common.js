'use strict';

const $ = require('jquery');
const popper = require('popper.js');
const bootstrap = require('bootstrap');

modalWindow();
fadingElems();
lazyImg();

$('.carousel').on('slide.bs.carousel', e => {

	//lazy loading for slides
	let img = $(e.relatedTarget).find('img[data-src]');
	img.attr('src', img.data('src'));
	img.removeAttr('data-src');

})

function modalWindow() {
	const modal = $('#modal'),
		  modalOverlay = $('#modalOverlay'),
		  closeButton = $('#closeButton'),
		  openButton = $('#mapImage'),
		  contactsLink = $('#modal .location-link'),
		  mapMark = $('#mapImage .map-mark');

	const toggleModal = () => {
		modal.toggleClass("opened");
		modalOverlay.toggleClass("opened");
	};

	closeButton.click( () => {
		toggleModal();
	});

	openButton.click( () => {
		toggleModal();
	});

	mapMark.click( () => {
		toggleModal();
	});

	contactsLink.click( () => {
		toggleModal();
	});
};

function fadingElems() {
	const targetElem = document.querySelectorAll('.fading');

	if ('IntersectionObserver' in window) {
		const fadingElemObserver = new IntersectionObserver( (entries) => {
			entries.forEach( (entry) => {
				if (entry.isIntersecting) {
					let elem = entry.target;
					elem.classList.add('fade-in');
				}
			})
		});
		targetElem.forEach( (el) => {
			fadingElemObserver.observe(el);
		});
	} else {
		for (let i = 0; i < targetElem.length; i++) {
			targetElem[i].classList.add('fade-in');
		}
	}

};

function lazyImg() {
	const targetImg = document.getElementsByClassName('lazy-img');

	if ('IntersectionObserver' in window) {

		const lazyImgObserver = new IntersectionObserver( (entries) => {
			entries.forEach( (entry) => {
				if (entry.isIntersecting) {
					let img = entry.target;
					img.src = img.dataset.src;
				}
			})
		});

		Array.from(targetImg).forEach( el => {
			if (el.dataset.src) {
				lazyImgObserver.observe(el);
			} else {
				el.src = el.dataset.src;
			}
		})

	} else {

		for (let i = 0; i < targetImg.length; i++) {
			targetImg[i].src = targetImg[i].dataset.src;
		}

	}
};