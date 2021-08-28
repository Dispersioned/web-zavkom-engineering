// Start Swiper
// =======================
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

// Start Swiper Nav Buttons
// =======================

const startBioBtn = document.querySelector('.btns-pagination__item--bio');
const startOilBtn = document.querySelector('.btns-pagination__item--oil');
const startNavBtnsBody = document.querySelector('.start__swiper-pagination');

startBioBtn.addEventListener('click', function (e) {
	startNavBtnsBody.firstChild.click();
});

startOilBtn.addEventListener('click', function (e) {
	startNavBtnsBody.lastChild.click();
});

// Adaptive Swiper
// =======================

let newsSwiper, numbersSwiper;

// breakpoint where swiper will be destroyed
const NewsSwiperBreakpoint = window.matchMedia('(min-width: 992px)');
const NumbersSwiperBreakpoint = window.matchMedia('(min-width: 1200px)');

function breakpointChecker(breakpoint, sectionName) {
	const swiper = {
		sliderContainer: document.querySelector(`.${sectionName}__swiper-container`),
		pagination: document.querySelector(`.${sectionName}__swiper-pagination`),
		isInit: function () {
			return this.sliderContainer.classList.contains('swiper-container-initialized');
		},
	};

	if (breakpoint.matches === true) {
		// clean up old instances and inline styles when available
		if (breakpoint !== undefined && swiper.isInit()) {
			// newsSwiper.destroy();
			destroySwiper(sectionName);

			if (swiper.pagination) {
				while (swiper.pagination.firstChild) {
					swiper.pagination.removeChild(swiper.pagination.firstChild);
				}
			}
		}
		// or/and do nothing
		return;
	} else if (breakpoint.matches === false) {
		// fire small viewport version of swiper
		return enableSwiper(sectionName);
	}
}

// Swiper init functions
// =======================

function enableSwiper(sectionName) {
	if (sectionName == 'news') {
		enableNewsSwiper();
	}
	if (sectionName == 'numbers') {
		enableNumbersSwiper();
	}
}

function destroySwiper(sectionName) {
	if(sectionName == 'news') {
		newsSwiper.destroy();
	}
	if(sectionName == 'numbers') {
		numbersSwiper.destroy();
	}
}

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

const enableNumbersSwiper = function () {
	numbersSwiper = new Swiper('.numbers__swiper-container', {
		slidesPerView: 1,
		spaceBetween: 35,
		freeMode: true,

		breakpoints: {
			480: {
				slidesPerView: 2.5,
			},
			768: {
				slidesPerView: 3.5,
			},
		},

		scrollbar: {
			el: '.numbers__swiper-scrollbar',
		},
	});
};

// Resize listener
// =======================

NewsSwiperBreakpoint.addEventListener('change', function (e) {
	breakpointChecker(NewsSwiperBreakpoint, 'news');
});

NumbersSwiperBreakpoint.addEventListener('change', function (e) {
	breakpointChecker(NumbersSwiperBreakpoint, 'numbers');
});

// kickstart
breakpointChecker(NewsSwiperBreakpoint, 'news');
breakpointChecker(NumbersSwiperBreakpoint, 'numbers');
