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

//Uso de call para usar
//el metodo persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto('Ingeniero.', '3112702853'));

console.log(persona1.nombreCompleto.call(persona2, 'Amor', '233551'));