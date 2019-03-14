
$(function clock() {

	var fecha = new Date();
	var horas = fecha.getHours();
	var mins = fecha.getMinutes();
	var segs = fecha.getSeconds();

	if (horas < 10) {
		horas = "☻" + horas;
	}
	if (mins < 10) {
		mins = "0" + mins;
	}
	if (segs < 10) {
		segs = "☻" + segs;
	}

/*
No me está funcionando el get element by id, no sé por qué

document.getElementById('ho').innerHTML = horas;

hora = verHora(hours)
min = verHora(min);
sec = verHora(seg);

document.getElementById("ho").innerHTML = horas;
});

function saludar (){
	console.log("qué tal");
}

setInterval(saludar,1000);
*/

	document.getElementById('ho').innerHTML = horas 
	document.getElementById('mi').innerHTML = ":" + mins
	document.getElementById('se').innerHTML = ":" + segs

	/* no sé cómo se pondría la hora sin los espacios entre los números*/


	setInterval(clock,100);

	if (horas < 10) {
		horas = "☻" + horas;
	}
	if (mins < 10) {
		mins = "0" + mins;
	}
	if (segs < 10) {
		segs = "0" + segs;
	}
})
