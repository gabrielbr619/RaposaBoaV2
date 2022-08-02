const menu_hamburguer = document.querySelector("#menu-hamburguer")
const fox_icon = document.querySelector("#logo-icon");

menu_hamburguer.addEventListener('mouseover',animation_fox)
menu_hamburguer.addEventListener('mouseleave',animation_fox_2)

const animation_fox = () => fox_icon.style.display="block";
const animation_fox_2 = () => fox_icon.style.display="none";


