$(document).ready(function(){
    $('.slider__wrapper').slick({
        infinite: false,
        waitForAnimate: false,
    });
});


// Подсчет слайдов 
var $slider = $('.slider__wrapper');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = 3;
    $(sliderCounter).text(currentSlide + ' | ' + slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
  
  $slider.slick();
};


// Кнопки табов
const tabButtons = document.querySelectorAll("[data-tab]");
// По нажатию на кнопку
tabButtons.forEach(function(item){
    item.addEventListener("click", function(){
        // Скрываем все табы
        const tabGroup = document.querySelectorAll(".tab-item-group");
        tabGroup.forEach(function(item){
            item.classList.remove("tab-menu__content--active")
        });
        // Убираем "active" со всех кнопок
        tabButtons.forEach(function(item){
            item.classList.remove("button-item--active");
        });

        // Добавляем "active" нужной кнопке
        item.classList.add("button-item--active");
        // Показываем нужный контент
        const tabMenu = item.closest(".tab-menu");
        const tabContent = tabMenu.querySelector("#" + item.dataset.tab);
        tabContent.classList.add("tab-menu__content--active")
    });
});

// Бронирование
// Находим кнопки таблицы
const bookingBtn = document.querySelectorAll("[data-booking]");
// Находим форму
const bookingForm = document.querySelector(".booking-form");
bookingBtn.forEach(function(item){
    // Удаляем "active" с кнопок
        item.addEventListener("click", function(){
            bookingBtn.forEach(function(item){
                item.classList.remove("data--active");
            });
        // Меняем значение формы
        bookingForm.value = this.dataset.booking
        // Ставим "active" на нужную кнопку
        item.classList.add("data--active");
    });
});

// Burger
const burgerBtn = document.querySelector("[data-burger-btn]");

burgerBtn.addEventListener("click", function(e){
    e.stopPropagation();
    let burgerIcon = document.querySelector(".burger-icon__line");
    let burgerMenu = burgerBtn.closest(".burger-menu");

    burgerBtn.classList.toggle("burger-icon--active");
    burgerMenu.classList.toggle("burger-menu--active");
    burgerIcon.classList.toggle("burger-icon__line--active");
    burgerClose()
});

function burgerClose(){
document.addEventListener("click", function(e){
    let burgerMenu = burgerBtn.closest(".burger-menu");
    let burgerIcon = document.querySelector(".burger-icon__line");

    if (e.target !== burgerMenu){
        burgerMenu.classList.remove("burger-menu--active");
        burgerBtn.classList.remove("burger-icon--active");
        burgerIcon.classList.remove("burger-icon__line--active");
        return
    }
     else{
    };
});
}