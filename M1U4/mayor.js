const nombre = prompt('¡Hola! Ingrese su nombre: ', '');
const n1 = prompt('Ingrese el primer número: ', '');
const n2 = prompt('Ingrese el segundo número: ', '');
const n3 = prompt('Ingrese el tercer número: ', '');
const n4 = prompt('Ingrese el cuerto número: ', '');
const n5 = prompt('Ingrese el quinto número: ', '');


const numeros = [n1, n2, n3, n4, n5];
console.log (numeros);

let mayor = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = (numeros[i]);
    }
}

document.write(`Estimado ${nombre}, el número mayor que ha ingresado es ${mayor}.`);
console.log(`El número mayor del usuaraio ${nombre} es ${mayor}`);

