const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir,.cerrar");
const input = document.querySelector("input[type=submit");
function toggleNavegacion(evento){
	evento.preventDefault();
	navegacion.classList.toggle("desplegado");
}

botones.forEach(function(boton){
	boton.addEventListener("click", toggleNavegacion);
});
	
input.addEventListener("submit", function(){
	input.preventDefault();
});