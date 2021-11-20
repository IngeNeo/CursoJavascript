let miFuncion = function () {
	console.log('saludos desde mi función');
}

const miFuncionFlecha1 = () => {
	console.log('saludos desde mi función flecha');
}

//La misma definición pero usando una sola linea
const miFuncionFlecha = () => console.log('saludos desde mi función flecha');

miFuncionFlecha();

const saludar1 = () => {
	return 'Saludos desde función flecha';
}

//La misma definición pero usando una sola linea
const saludar = () => 'Saludos desde función flecha';

console.log(saludar());

const regresaObjeto = () => ({ nombre: 'Roger', apellido: 'Valencia' });
console.log(regresaObjeto());

const funcionConParametrosClasico = function (mensaje) {
	console.log(mensaje);
}

//const funcionConParametros = (mensaje) => console.log( mensaje );
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('saludos con parametros');


//const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
	let resultado = op1 + op2;
	return `Resultado: ${resultado}`;
};
console.log(funcionConVariosParametros(3, 5));


