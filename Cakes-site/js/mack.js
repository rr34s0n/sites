// Считываем поле ввода
let phoneInput = document.querySelector("#phone");
// Считываем кнопку
let btn = document.querySelector(".btn");

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});