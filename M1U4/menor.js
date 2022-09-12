const nombre = prompt ('¡Hola! Ingrese su nombre: ', '');
const n1= prompt ('Ingrese el primer número: ', '');
const n2= prompt ('Ingrese el segundo número: ', '');
const n3= prompt ('Ingrese el tercero número: ', '');
const n4= prompt ('Ingrese el cuarto número: ', '');
const n5= prompt ('Ingrese el quinto número: ', '');


const numeros = [n1, n2, n3, n4, n5];
console.log(numeros);

let menor = numeros[0];


for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i]
       
    }

}

document.write(`Estimado ${nombre}, el número menor que ha ingresado es ${menor}.`);
console.log(`El número menor del usuario ${nombre} es ${menor}.`);

