const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir,.cerrar");
const formulario = document.querySelector("form");

function toggleNavegacion(evento){
	evento.preventDefault();
	navegacion.classList.toggle("desplegado");
}

botones.forEach(function(boton){
	boton.addEventListener("click", toggleNavegacion);
});
/*formulario.addEventListener("submit",function(event){
	event.preventDefault();
});
console.log(formulario);
*/	