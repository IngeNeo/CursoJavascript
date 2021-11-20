//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
	this.nombreCompleto = function () {
		return this.nombre + ' ' + this.apellido;
	}
}

let padre = new Persona('Roger', 'Valencia', 'inge@corp.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Isabel', 'Miranda', 'miisa@bella.com');
console.log(madre.nombreCompleto());

padre.nombre = 'Alexis';

console.log(padre);
console.log(madre);
