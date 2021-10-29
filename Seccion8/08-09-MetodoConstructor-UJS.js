//?Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
}

let padre = new Persona('Roger', 'Valencia', 'inge@corp.com');
console.log(padre);

let madre = new Persona('Isabel', 'Miranda', 'miisa@bella.com');
console.log(madre);

padre.nombre = 'Alexis';

console.log(padre);
console.log(madre);