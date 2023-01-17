// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import Swiper, {
	Pagination,
	EffectFade,
	Autoplay,
	Navigation,
	Thumbs
  } from "swiper";


document.addEventListener('DOMContentLoaded', () => {

	Swiper.use([Pagination, EffectFade, Autoplay, Navigation,Thumbs]);

	// Custom JS

	var swiper = new Swiper(".new-product-swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
		breakpoints: {
			320: {
				slidesPerView: 2.2,
				spaceBetween: 20,
	
			},
			  // when window width is >= 480px
			480: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			  // when window width is >= 640px
			820: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
        }

    });


	//burger-menu

	const body = document.querySelector("body"),
	burger = document.querySelector(".burger"),
	mobileMenu = document.querySelector(".navigation-header");

	burger.addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		burger.classList.toggle("burger-active");
		mobileMenu.classList.toggle("navigation-header-active");
		body.classList.toggle("overflow");
	});
})