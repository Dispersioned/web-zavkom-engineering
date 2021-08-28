const scrollToTopBtn = document.querySelector('.scroll-to-top');

scrollToTopBtn.addEventListener('click', function (e) {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});
