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
persona.tel = '3124996577';

console.log( persona );

delete persona.tel;

console.log( persona );

//?Concatenar cada valor de cada propiedad
console.log( persona.nombre + ', ' + persona.apellido);

//for in
for( nombrePropiedad in persona){
	console.log( persona[nombrePropiedad]);
}

let personaArray = Object.values( persona );
console.log( personaArray );

let personaString = JSON.stringify( persona );
console.log( personaString );