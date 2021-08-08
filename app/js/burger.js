let burgerIcon = document.querySelector('.header__burger');
let burgerBody = document.querySelector('.header__nav-body');

if (burgerIcon) {
	burgerIcon.addEventListener('click', function (e) {
		document.querySelector('body').classList.toggle('_lock');

		burgerIcon.classList.toggle('_active');
		burgerBody.classList.toggle('_active');
	});
}

// let navExpandableBtns = document.querySelectorAll('.menu__link--expandable');

// if(navExpandableBtns) {
// 	navExpandableBtns.forEach(element => {
// 		element.addEventListener('click', function(e) {
// 			element.classList.toggle('_active');
// 			element.nextElementSibling.classList.toggle('_open');
// 		})
// 	});
// }