let productMenu = document.getElementById("product-menu");

productMenu.addEventListener("click", function() {
    let subMenu = this.parentElement.getElementsByTagName("ul");
    
    if(subMenu[0].hasAttribute("class")) {
        subMenu[0].removeAttribute("class");
    } else {
        subMenu[0].setAttribute("class", "displayNone");
    }
})
