//--------------------------------- Burger menu --------------------------------------------------
const burgerBtn = document.querySelector('.burger-icon')
burgerBtn.addEventListener("click", function(){
    const burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.classList.toggle("burger-menu-active");
    burgerBtn.classList.toggle("burge-link-active");
});

// Закрытие текста
const readbutton = document.querySelector("#read-btn");
const hidetext = document.querySelector("#text-hide")

readbutton.addEventListener("click", function(){
    hidetext.classList.toggle("text-wrapper--active");
});


//-------------------------------------- Drop menu ------------------------------------------------
// Находим каждую карточку с дроп меню и делаем цикл "forEach"
document.querySelectorAll(".drop-menu__card").forEach(function(dropDownCard){
    // Внутри карточки находим кнопку и контент
    const dropMenuBtn = dropDownCard.querySelector(".card-button");
    const dropContent = dropDownCard.querySelector(".card-content");
    // Элементы меню
    const dropItem = dropDownCard.querySelector(".card-content__link");
    // По нажатию на кнопку появляется/убирается меню
    dropMenuBtn.addEventListener("click", function(){
        dropContent.classList.toggle("card-content--active");
        dropMenuBtn.classList.toggle("card-button--active");
    });
    // По нажатию на элемент списка убирается меню
    dropItem.addEventListener("click", function(e){
        e.stopPropagation
        dropContent.classList.remove("card-content--active");
        dropMenuBtn.classList.remove("card-button--active");
    });
    document.addEventListener("click", function(e){
       if ( e.target !== dropMenuBtn ){
        dropContent.classList.remove("card-content--active");
        dropMenuBtn.classList.remove("card-button--active");
    };
    });
});







