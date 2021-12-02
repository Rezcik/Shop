let slider = {
	container: document.querySelector('.slider'),
	items: document.querySelectorAll('.slider__item'),
	progress: document.querySelectorAll('.slider__progress__item'),
}

let count = 0;
let sliderMove = setInterval(() => {
	slider.items.forEach( item => {
		item.classList.remove('slider__active');
	});
	slider.progress.forEach( progress => {
		progress.classList.remove('slider__progress__active');
	});
	slider.items[count].classList.add('slider__active');
	slider.progress[count].classList.add('slider__progress__active');
	count++;
	if(count === 3){ count = 0; }
}, 5000);