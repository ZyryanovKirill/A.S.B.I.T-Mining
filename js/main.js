$(document).ready(function() {
	$('.slider').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 3,
		 responsive: [
			 {
			 	breakpoint: 800,
		        settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
		      }
		 	},
		 	{
		 		breakpoint: 600,
		 		settings: {
		 			slidesToShow: 1,
		 		}
		 	}
		 ]
	});
});

document.querySelectorAll('.faq__block__btn').forEach((el) => {
	el.addEventListener('click', () => {

		let faq__block__item = el.nextElementSibling;
		console.log(faq__block__item)

		if(faq__block__item.maxHeight) {
			document.querySelectorAll('.faq__block-text').forEach((el) => el.style.maxHeight = null)
		}else {
			document.querySelectorAll('.faq__block-text').forEach((el) => el.style.maxHeight = null)
			faq__block__item.style.maxHeight = faq__block__item.scrollHeight + 'px'
		}
		
	})
})

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__mobile');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__mobile--active');
  menuBtn.classList.toggle('btn-mobile--active');
})