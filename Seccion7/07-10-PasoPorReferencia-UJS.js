//Tipos primitivos
let x = 10;

function cambiarValor(a) {
	a = 20;
}

//Paso por valor
cambiarValor(x);//10
console.log(x);
//console.log(a);

const persona = {
	nombre: 'Roger',
	apellido: 'Valencia'
}

function cambiarValorObjeto(p1) {
	p1.nombre = 'Alexis';
	p1.apellido = 'Garcia';
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);