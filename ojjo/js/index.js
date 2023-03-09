// Табы на главной
const tabLink = document.querySelectorAll("[data-tab]")
tabLink.forEach(function(item){
    // Click effect
    item.addEventListener('click', function(){
        // Parent div
        const tabItem = item.closest(".tab-item")
        tabLink.forEach(function(item){
            const tabItem = item.closest(".tab-item")
            item.classList.remove("tab-item-link-active")
            tabItem.classList.remove("tab-item-active")
        });
        item.classList.add("tab-item-link-active")
        tabItem.classList.add("tab-item-active")
    });
});


//Burger menu
const burgerBtn = document.querySelector('[data-burger-btn]');
const burgerMenu = document.querySelector(".burger-menu");
burgerBtn.addEventListener("click", function(){
    
    burgerBtn.classList.toggle("burge-link-active");
    burgerMenu.classList.toggle("burger-menu-active");
  
});