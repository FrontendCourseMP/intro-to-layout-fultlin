let burgerList = document.querySelector(".burger__list");
let burger = document.querySelector(".burger");

burger.onclick = function () {
  burgerList.classList.toggle("active");
};
burgerList.classList.toggle("active");

const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (4 <= month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};

