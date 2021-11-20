let persona1 = {
	nombre: 'Roger',
	apellido: 'Valencia',
	nombreCompleto: function (titulo, tel) {
		return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
	}
}

let persona2 = {
	nombre: 'Isabel',
	apellido: 'Miranda'
}

//Uso de apply para usar
//el metodo persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto('Ingeniero.', '3112702853'));

//?Se crea un arrglo para pasar los argumentos con el metodo Aplly
let arreglo = ['Ing', '55443322'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));