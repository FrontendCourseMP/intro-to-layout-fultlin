// let name = "jhon";
// const COLOR_GREEN = "#0F0";
// const MyBiryhday = "17.12.2005";
// alert(`Hello, ${name}`)
// alert(COLOR_GREEN);
// alert(MyBiryhday);
// let num = 123;
// num = 10.23;
// console.log(num);
// result = prompt('QQ');
// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss );
// console.log(typeof(x))

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
const slides = Array.from(slider.querySelectorAll('.slider__content'));
const slideCount = slides.length;
let slideIndex = 0;

function next() {
    var slider = document.querySelector('.slider');
    var slides = slider.querySelectorAll('.slider');

    if (slideIndex < slides.length - 1) {
        slides[slideIndex].style.display = 'none';
        slideIndex++;
        slides[slideIndex].style.display = 'block';
    } else {
        slideIndex = 0;
        slides[slides.length - 1].style.display = 'none';
        slides[slideIndex].style.display = 'block';
    }
}
