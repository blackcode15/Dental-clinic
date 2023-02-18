// jQuery
// Плавний скролл якоря
$(".nav a").on("click", (event) => {
	let target = event.target;
	let href = target.getAttribute('href');
	let block = document.querySelector(href);
	
	$('html, body').animate({
		scrollTop: block.offsetTop
	}, 500);
});

// Анімація посилань в навігації відносно скроллу
window.addEventListener("scroll", () => {
	let blocks = [...document.querySelectorAll(".block")];
	let block = blocks.filter(item => item.getBoundingClientRect().top - 50 < 0);
	let currentBlock = block[block.length - 1];

	document.querySelectorAll(`a.link`).forEach(link => link.classList.remove("active"));
	document.querySelector(`a[href='#${currentBlock.id}']`).classList.add("active");
});

// Плавний скролл сторінки
ScrollReveal({ reset: true }).reveal('.container .block');


// JS
// let nav = document.querySelector(".nav");
// nav.addEventListener("click", (event) => {
// 	event.preventDefault();
	
// 	let target = event.target;
// 	let href = target.getAttribute('href');
// 	let block = document.querySelector(href);
// 	scrollTo(block, 1000);
// });

// var timer;
// function scrollTo(elem, delay) {
// 	let pos = Math.floor(elem.offsetTop);
// 	let windowPos = Math.floor(window.pageYOffset);
// 	let direction = windowPos > pos ? -1 : 1;
// 	let tick = 20;
// 	let step = (pos || windowPos) / (delay / tick) * direction;
// 	if(windowPos > (pos + tick) || windowPos < (pos - tick)) {
// 		window.scrollBy(0, step);
// 		timer = setTimeout(() => scrollTo(elem, delay), tick);
// 	} else clearTimeout(timer);
// 	return false;
// }
