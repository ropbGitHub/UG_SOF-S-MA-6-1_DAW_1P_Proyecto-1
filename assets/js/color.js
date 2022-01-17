
/*---------------------------FORMULARIO-VALIDACIONES-------------------------*/
var form = document.querySelector("#formContacto");
form.addEventListener('submit', validar);
let cont=0;
/*---------------------------INICIO-------------------------*/
function validar(event) {
    var resultado = true;
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");
    var selectEstado = document.getElementById("seleccion");
    var radiosGenero = document.getElementsByName("tipo");
    var chkSuscrip = document.getElementById("check");
    var letra = /^[a-z ,.'-]+$/i;
    limpiarMensajes();  
/*---------------------------PRIMER RECUADRO-------------------------*/    
    //validacion para nombres
    if (txtNombres.value === '') {
        resultado = false;
        mensaje("Nombre es requerido", txtNombres);
    } else if (!letra.test(txtNombres.value)) {
        resultado = false;
        mensaje("Nombre solo debe contener letras", txtNombres);
    } else if (txtNombres.value.length > 20) {
        resultado = false;
        mensaje("Nombre maximo 20 caracteres", txtNombres);
    }
    
    //validacion para apellidos
    if (txtApellidos.value === '') {
        resultado = false;
        mensaje("Apellido es requerido", txtApellidos);
    } else if (!letra.test(txtApellidos.value)) {
        resultado = false;
        mensaje("Apellido solo debe contener letras", txtApellidos);
    } else if (txtApellidos.value.length > 20) {
        resultado = false;
        mensaje("Apellido maximo 20 caracteres", txtApellidos);
    }

/*---------------------------SEGUNDO RECUADRO-------------------------*/   
    //seleccion
    if (selectEstado.value === null || selectEstado.value === '0') {
        resultado = false;
        mensaje("Debe seleccionar su categoria", selectEstado);
    }
    
/*---------------------------TERCER RECUADRO-------------------------*/   
    //radio button
    var sel = false;
    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            sel = true;
            let res=radiosGenero[i].value;
            break;
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("Debe seleccionar un tipo", radiosGenero[0]);
    }
    
/*---------------------------QUINTO RECUADRO-------------------------*/
    //validacion de un checkbox
    if(!chkSuscrip.checked){
     resultado=false;
     mensaje("Aceptar Terminos", chkSuscrip);
     }     
     
    if(!resultado){
        event.preventDefault();  // detener el evento  //stop form from submitting
    }
 }
 
 function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.textContent = cadenaMensaje;
    //nodoMensaje.style.color = "red";
    //nodoMensaje.display = "block";
    nodoMensaje.setAttribute("class", "mensajeError");
    nodoPadre.appendChild(nodoMensaje);
}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }
}
