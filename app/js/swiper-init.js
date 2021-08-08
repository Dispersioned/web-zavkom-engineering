const startSwiper = new Swiper('.start__swiper-container', {
	loop: true,
	autoHeight: true,

	navigation: {
		nextEl: '.start__swiper-button-next',
		prevEl: '.start__swiper-button-prev',
	},

	pagination: {
		el: '.start__swiper-pagination',
		clickable: true,
	},
});

const startBioBtn = document.querySelector('.btns-pagination__item--bio');
const startOilBtn = document.querySelector('.btns-pagination__item--oil');
const startNavBtnsBody = document.querySelector('.start__swiper-pagination');

startBioBtn.addEventListener('click', function (e) {
	startNavBtnsBody.firstChild.click();
});

startOilBtn.addEventListener('click', function (e) {
	startNavBtnsBody.lastChild.click();
});

// News Swiper

let newsSwiper;

// breakpoint where swiper will be destroyed
const NewsSwiperBreakpoint = window.matchMedia('(min-width: 990px)');

const breakpointChecker = function () {
	if (NewsSwiperBreakpoint.matches === true) {
		// clean up old instances and inline styles when available
		let newsSliderContainer = document.querySelector('.news__swiper-container');
		if (NewsSwiperBreakpoint !== undefined && newsSliderContainer.classList.contains('swiper-container-initialized')) {
			newsSwiper.destroy();
			let pagination = document.querySelector('.news__swiper-pagination');
			while (pagination.firstChild) {
				pagination.removeChild(pagination.firstChild);
			}
		}
		// or/and do nothing
		return;
	} else if (NewsSwiperBreakpoint.matches === false) {
		// fire small viewport version of swiper
		return enableNewsSwiper();
	}
};

const enableNewsSwiper = function () {
	newsSwiper = new Swiper('.news__swiper-container', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,

		breakpoints: {
			575: {
				slidesPerView: 2,
			},
		},

		navigation: {
			nextEl: '.news__swiper-button-next',
			prevEl: '.news__swiper-button-prev',
		},

		pagination: {
			el: '.news__swiper-pagination',
		},
	});
};

// keep an eye on viewport size changes
NewsSwiperBreakpoint.addEventListener('change', function (e) {
	breakpointChecker();
});

// kickstart
breakpointChecker();
