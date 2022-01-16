var form = document.querySelector("#formulario_cotizacion");
form.addEventListener('submit', validarDatos);

function validarDatos(event) {
    var resultado = true;
    var txtNombre = document.getElementById("idNombre");
    var txtApellido = document.getElementById("idApellido");
    var txtemail = document.getElementById("idEmail");
    var txtNumero = document.getElementById("idCantidadPer");
    var txtFecha = document.getElementById("idFecha");
    var btnRadios = document.getElementsByName("salon");
    var btnCheks = document.getElementsByName("servicio");
    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    limpiarMensajes();

    //VALIDAR NOMBRES
    if (txtNombre.value === '') {
        resultado = false;
        mensaje("Nombre es requerido", txtNombre);
    } else if (!letra.test(txtNombre.value)) { //letra.test(txtNombre.value)
        resultado = false;
        mensaje("Nombre solo debe contener letras", txtNombre);
    } else if (txtNombre.value.length > 20) {
        resultado = false;
        mensaje("Nombre maximo 20 caracteres", txtNombre);
    }
    //VALIDAR APELLIDOS
    if (txtApellido.value === '') {
        resultado = false;
        mensaje("Apellido es requerido", txtApellido, mensaje);
    } else if (!letra.test(txtApellido.value)) { //letra.test(txtNombres.value)
        resultado = false;
        mensaje("Apellido solo debe contener letras", txtApellido);
    } else if (txtApellido.value.length > 20) {
        resultado = false;
        mensaje("Apellido maximo 20 caracteres", txtApellido);
    }

    //VALIDAR CORREO ELECTRONICO
    if (txtemail.value === "") {
        resultado = false;
        mensaje("Email es requerido", txtemail);
    } else if (!correo.test(txtemail.value)) {
        resultado = false;
        mensaje("Email no es correcto", txtemail);
    }
    //VALIDAR NUMERO
    if (txtNumero.value === '') {
        resultado = false;
        mensaje("Numero es requerido", txtNumero, mensaje);
    }
    //VALIDAR FECHA
    var dato = txtFecha.value;

    var fechaI = new Date(dato);
    var anioI = fechaI.getFullYear();

    var fechaActual = new Date();
    var anioA = fechaActual.getFullYear();

    if (fechaI < fechaActual) {
        resultado = false;
        mensaje("La fecha no puede ser inferior o igual a la fecha actual", txtFecha);
    } else if (anioI > anioA) {
        resultado = false;
        mensaje("Debe ser del año actual", txtFecha);
    }
    //VALIDAR RADIOS
    var sel = false;
    for (let i = 0; i < btnRadios.length; i++) {
        if (btnRadios[i].checked) {
            sel = true;
            let res = btnRadios[i].value;
            break;
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("Debe seleccionar un salón", btnRadios[0]);
    }
    //VALIDAR CHEKS
    for (let i = 0; i < btnCheks.length; i++) {
        if (btnCheks[i].checked) {
            sel = true;
            break;
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("Debe seleccionar al menos un servicio", btnCheks[0]);
    }

    //SI ES TRUE-> NORMAL; SI ES FALSE ->DETIENE EVENTO (evento de envio submit)
    if (!resultado) {
        event.preventDefault();
    } else {
        alert("Gracias por llenar el formulario :D");
    }
}

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.textContent = cadenaMensaje;
    nodoMensaje.setAttribute("class", "mensajeError");
    nodoPadre.appendChild(nodoMensaje);

}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }

}

