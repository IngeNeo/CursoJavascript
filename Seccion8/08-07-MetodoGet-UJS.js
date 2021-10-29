let persona = {
	nombre: 'Roger',
	apellido: 'Valencia',
	email: 'inge@corp.com',
	edad: 28,
	get nombreCompleto () {
		return this.nombre + ' ' + this.apellido;
	}
}

console.log( persona.nombreCompleto );