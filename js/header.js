let header = {
	currency: document.querySelector('.currency'),
	currencyList: document.querySelector('.currency__list'),
	language: document.querySelector('.language'),
	languageList: document.querySelector('.language__list'),
};

let currencyClick = () => {
	header.currencyList.classList.toggle('currency__active');
}

let languageClick = () => {
	header.languageList.classList.toggle('language__active');
}
header.currency.addEventListener('click', currencyClick);
header.language.addEventListener('click', languageClick);