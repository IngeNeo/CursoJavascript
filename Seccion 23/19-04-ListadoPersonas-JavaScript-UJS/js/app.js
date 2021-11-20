const personas = [
	new Persona('Roger', 'Valencia'),
	new Persona('Isabel', 'Miranda')
];

function mostrarPersonas() {
	console.log('Mostrar personas...');
	let texto = '';
	for (let persona of personas) {
		console.log(persona);
		texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
	}
	document.getElementById('personas').innerHTML = texto;
}