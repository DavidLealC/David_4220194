const fecha = new Date();
let  nombre = prompt("Introduce tu nombre:");
let edad = parseInt(prompt("Introduce tu edad:"));
console.log("Tu nombre es: "+ nombre);
console.log("Naciste en: " + (fecha.getFullYear() - edad));