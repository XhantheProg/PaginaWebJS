const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito=document.getElementsByClassName('.parrafito');
const pid=document.getElementById('#pid');

const input=document.querySelector('input');
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML='Hola Munso JavaSript <hr> <br> 2024'

//h1.innerText='Hola Munso JavaSript <hr> <br> 2024'

//console.log("Muestra la clase: " + h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');


h1.classList.add('blue')
h1.classList.remove('blue')
h1.classList.add('verde')