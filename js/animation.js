const menuHamburguer = document.querySelector("#menu-hamburguer")

menuHamburguer.addEventListener('mouseover',animacaoRaposa)
menuHamburguer.addEventListener('mouseleave',animacaoRaposa2)

function animacaoRaposa(){
  const raposaIcon = document.getElementById("logo-icon");
  raposaIcon.style.display="block";
}
function animacaoRaposa2(){
  const raposaIcon = document.getElementById("logo-icon");
  raposaIcon.style.display="none";
}

