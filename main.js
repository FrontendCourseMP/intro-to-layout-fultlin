let burgerList = document.querySelector('.burger__list');
let burger = document.querySelector('.burger')

burger.onclick = function () {
	burgerList.classList.toggle('active');
}
burgerList.classList.toggle('active');