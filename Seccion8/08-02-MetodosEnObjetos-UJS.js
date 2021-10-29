let x = 10;
console.log(x.length);

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
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

console.log(persona);