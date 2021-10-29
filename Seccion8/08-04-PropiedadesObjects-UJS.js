let persona = {
	nombre: 'Roger',
	apellido: 'Valencia',
	email: 'inge@corp.com',
	edad: 28,
	nombreCompleto: function () {
		return this.nombre + ' ' + this.apellido;
	}
}

console.log(persona.nombre);
console.log(persona['apellido']);

//for in
for (nombrePropiedad in persona) {
	console.log(nombrePropiedad);
	console.log(persona[nombrePropiedad]);
}