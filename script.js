const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const p = document.getElementById('resultado')
const form = document.getElementById('formulario');

// form.addEventListener('submit', formOnClick); //aunque mandemos a llamar una funcion con otra tarea, el formulario sigue redirigiendo por defecto.

// function formOnClick(pocho){
//     console.log(pocho);//pocho es un nombre del parametro, en general se ocupa "event" porque adivina que? es un evento.
//     pocho.preventDefault(); //con la propiedad preventDefault() añadida al parámetro de la función prevenimos esta accion por defecto del formulario.
//     let resultado = parseInt(input1.value) + parseInt (input2.value);
//     p.append(resultado);

// }

btn.addEventListener('click', btnOnClick); //click es el nombre del evento que queremos esuchar, y btn...la funcion, pero aca en el addEventListener no lleva parentesis.//

function btnOnClick(){

    let resultado = parseInt(input1.value) + parseInt (input2.value);
    p.append(resultado);

}