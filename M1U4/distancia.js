const nombre = prompt('¡Hola! Ingrese su nombre: ', '');
const distancia = parseInt(prompt('Ingrese la cantidad de metros que necesita recorrer:', ''));
console.log(`El usuario se llama ${nombre} e ingresó ${distancia} metros`);

if (distancia <= 1000) {
    document.write(`Estimad@ ${nombre}, le conviene ir a pie.`);
    console.log(`Se le recomendó al usuario ir a pie.`)

} else if (distancia <= 10000) {
    document.write(`Estimad@ ${nombre}, le conviene ir en bicicleta.`);
    console.log(`Se le recomendó al usuario ir en bicicleta.`)

} else if (distancia <= 30000) {
    document.write(`Estimad@ ${nombre}, le conviene ir en colectivo.`);
    console.log(`Se le recomendó al usuario ir en colectivo.`)

} else if (distancia <= 100000) {
    document.write(`Estimad@ ${nombre}, le conviene ir en auto.`);
    console.log(`Se le recomendó al usuario ir en auto.`)

} else if (distancia > 100000) {
    document.write(`Estimad@ ${nombre}, le conviene ir en avión.`);
    console.log(`Se le recomendó al usuario ir en avión.`)
}
