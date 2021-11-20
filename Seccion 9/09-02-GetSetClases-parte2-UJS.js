class Persona {
	constructor(nombre, apellido) {
		this._nombre = nombre;
		this._apellido = apellido;
	}
	get nombre() {
		return this._nombre;
	}
	set nombre(nombre) {
		this._nombre = nombre;
	}
}

let persona1 = new Persona('Roger', 'Valencia');
console.log(persona1);
persona1.nombre = 'Roger Alexis';//set nombre('Roger Alexis')
console.log(persona1);
console.log(persona1.nombre);//get nombre