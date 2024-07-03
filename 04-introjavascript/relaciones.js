


//operadores relacionales en javascript
// > mayor que
let uno = 150;
let dos = 500;

let mayor = uno > dos;
console.log('El número ' + uno + ' es mayor que' + dos + '; ' + mayor);

let menor = uno < dos;
console.log('El número ' + uno + ' es menor que' + dos + '; ' + menor);

let igual = uno == dos;
console.log('El número ' + uno + ' es igual que' + dos + '; ' + igual);

let distinto = uno != dos;
console.log('El número ' + uno + ' es distinto que' + dos + '; ' + distinto);



//combinaciones
let mayorIgual = uno >= dos;
console.log('El número ' + uno + ' es mayor o igual que ' + dos + ': ' + mayorIgual);

let menorIgual = uno <= dos;
console.log('El número ' + uno + ' es menor o igual que ' + dos + ': ' + menorIgual);

let identicoTodo = uno >= dos;
console.log('El número ' + uno + ' es identico al numero ' + dos + ': ' + identicoTodo);



//Condicionales
//() => condición que evalua el si logico (if)
//{} => bloque de código que se ejecuta si la condición se cumple
//se cumple la condición con un booleano: true / false
//si es true se ejecuta el bloque de codigo

let octavos = true;

if (octavos){
    console.log ('El partido de octavos de final se juega el 4 de julio');
}

console.log('=================================')

let edad = 18;
let inscripto = true;
let argentino = true;

if (edad >= 18) {
    console.log('1. Puede votar');
}

if (edad < 18) {
    console.log('1. No puede votar');
}

console.log('=================================')

// if anidado 
if (edad) {
    if (inscripto) {
        if (argentino) {
            console.log('2. Puede votar')
        }
    }
}

console.log('=================================')

//Operadores lógicos && (and) || (or) ! (not)
//    1               2            3 
if (edad >= 18 && inscripto && argentino) {
    console.log('3. Puede votar')
}

console.log('=================================')

let email = 'pepe@gmail.com'
let password = '123456789'

if(email == 'pepe@gmail.com' && password == '123456789'){
    console.log('4. Bienvenido a la plataforma')
}


console.log('=================================')


// || con que uno de los datos sea true se ejecuta el bloque de codigo
if(email == 'pepe@gmail.com' || password == '123456789'){
    console.log('5. Bienvenido a la plataforma')
}



console.log('=================================')

let club = false
console.log(club)

if (!club) {
    console.log('6. Genial con tu Club!!')
}

console.log(!club)