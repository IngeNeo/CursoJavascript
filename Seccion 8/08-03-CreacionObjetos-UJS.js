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

//? Otra forma de definir un objeto en Javascript
let persona2 = new Object();
persona2.nombre = 'Isabel';
persona2.direccion = 'Mi corazón';
persona2.tel = '3112589630';

console.log(persona2.nombre);