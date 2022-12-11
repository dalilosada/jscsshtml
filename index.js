let nombre= "Dali";
let apellido= "Losada";
let saludo = ("Hola, mi nombre es " + nombre + " " + apellido)

console.log ("Hola, mi nombre es " + nombre + " " + apellido)
console.log ("Hola, mi nombre es " + nombre + " " + apellido)
console.log( saludo )
let a = 2;
let b = 3;
 console.log(a,b)

function saludar(arg1,arg2){
  console.log ( "soy " + arg1 + " " + arg2)
}

saludar (nombre,apellido)

nombre + apellido




let nombreIngresado = prompt("Ingrese su nombre");

console.log(nombreIngresado)
 
alert (`¡Hola ${nombreIngresado}!`);





const $btnSignIn= document.querySelector('.sign-in-btn'),
$btnSignUp = document.querySelector('.sign-up-btn'),
$signUp = document.querySelector('.sign-up'),
$signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
if (e.target === $btnSignIn || e.target === $btnSignUp) {
  $signIn.classList.toggle('active');
  $signUp.classList.toggle('active')
}

});