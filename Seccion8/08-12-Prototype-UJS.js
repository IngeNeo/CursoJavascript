//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
	this.nombreCompleto = function () {
		return this.nombre + ' ' + this.apellido;
	}
}

//! Agrega una nueva propiedad al Constructor para todos los objetos que se creen posterioemente
Persona.prototype.tel = '000000';

let padre = new Persona('Roger', 'Valencia', 'inge@corp.com');
padre.tel = '5834294';
console.log(padre.tel);


let madre = new Persona('Isabel', 'Miranda', 'miisa@bella.com');
madre.tel = '2333551';
console.log(madre.tel);

