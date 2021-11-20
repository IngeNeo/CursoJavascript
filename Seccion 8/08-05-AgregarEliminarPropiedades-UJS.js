let persona = {
	nombre: 'Roger',
	apellido: 'Valencia',
	email: 'inge@corp.com',
	edad: 28,
	nombreCompleto: function () {
		return this.nombre + ' ' + this.apellido;
	}
}

persona.tel = '3112702853';
//? tener cuidado si se escribe diferente porque crearia una nueva propiedad y no un cambio en el valor
//persona.te1 = '3124996577';
persona.tel = '3124996577';

console.log( persona );

//!Elimina la propiedad
delete persona.tel;

console.log( persona );