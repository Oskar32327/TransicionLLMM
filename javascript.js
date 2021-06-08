
let Empezar = document.getElementById("Empezar");
Empezar.onclick = Principal;

function Principal(){

	function eliminarIcono(elemento){
		elemento.remove();
}

	function insertarIconoAleatorio(){

		Empezar.classList.add("ocultar");

		const icono = document.createElement("div");

		icono.classList.add('icono');

		icono.innerHTML = "🎈";

		icono.style.left = Math.random() *100 + "vw";

		icono.style.animationDuration = Math.random() * 2 + 3 + "s";

		document.body.appendChild(icono);

		setTimeout(eliminarIcono, 3000, icono);

}

	setInterval(insertarIconoAleatorio, 1000);
}