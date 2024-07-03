
//database
let email = 'admin@gmail.com';
let password = '1234';



//recibimos datos del user
let emailUser = prompt('Introduce tu Email: ');
let passwordUser = prompt('Introduce tu Password: ');


//comparar los datos del user con la database
if(email == emailUser && password == passwordUser){
    alert('Bienvenido a la plataforma bancaria');
}