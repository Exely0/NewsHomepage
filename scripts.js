document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("mobile-menu");
    const menuSidebar = document.getElementById("side-menu");
    const overlay = document.getElementById("overlay");
    const closeSideMenu = document.getElementById("close-side-menu");

    menuIcon.addEventListener("click", function() {
        console.log("coucou");
        overlay.classList.remove("hidden");
        menuSidebar.classList.remove("hidden");
    });

    closeSideMenu.addEventListener("click", function() {
        menuSidebar.classList.add("hidden")
        overlay.classList.add("hidden")

    });
});
