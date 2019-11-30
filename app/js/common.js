'use strict';

import $ from "jquery";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/collapse";
import {Modal} from "./modal";
import {LazyImages} from "./lazy-images";
import {LazyBlocks} from "./lazy-blocks";

$('.carousel').on('slide.bs.carousel', e => {

	//lazy loading for slides
	
	let img = $(e.relatedTarget).find('img[data-src]');
	img.attr('src', img.data('src'));
	img.removeAttr('data-src');

});

let modal = new Modal({
	modal: '#modal',
	modalShow: '#modalShow',
	modalHide: '#modalHide'
}).init();

let lazyImg = new LazyImages('.lazy-img').onObserve();

let lazyContent = new LazyBlocks('.fading').onObserve();