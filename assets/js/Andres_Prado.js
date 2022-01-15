var form = document.querySelector("#formulario_cotizacion");
form.addEventListener('submit', validarDatos);
let cont = 0;

function validarDatos(event) {
    var resultado = true;
    var txtNombre = document.getElementById("idNombre");
    var txtApellido = document.getElementById("idApellido");
    var txtemail = document.getElementById("idEmail");
    //var txtNumero = document.getElementById("idCantidadPer");
    var txtFecha = document.getElementById("idFecha");
    var btnRadios = document.getElementsByName("salon");
    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    limpiarMensajes();

    validarNombre(txtNombre, resultado, letra, mensaje);
    validarApellido(txtApellido, resultado, letra, mensaje);
    validarCorreoElectronico(txtemail, resultado, correo, mensaje);
    //validarNumero();
    validarFecha(txtFecha, resultado, mensaje);
    validarRadio(btnRadios, resultado, mensaje);

    // if (!validarNombre.resultado || !validarApellido.resultado || !validarCorreoElectronico.resultado || !validarFecha.resultado
    //     || !validarRadio.resultado) {
    //     event.preventDefault();  // detener el evento  //stop form from submitting
    // }

    validacionDeCampos();
}

function validacionDeCampos() {

    if (!validarNombre.resultado || !validarApellido.resultado || !validarCorreoElectronico.resultado || !validarFecha.resultado
        || !validarRadio.resultado) {
        event.preventDefault();  // detener el evento  //stop form from submitting
    }
}

function validarNombre(txtNombre, resultado, letra) {

    if (txtNombre.value === '') {
        resultado = false;
        mensaje("Nombre es requerido", txtNombre, mensaje);
    } else if (!letra.test(txtNombre.value)) { //letra.test(txtNombres.value)
        resultado = false;
        mensaje("Nombre solo debe contener letras", txtNombre);
    } else if (txtNombre.value.length > 20) {
        resultado = false;
        mensaje("Nombre maximo 20 caracteres", txtNombre);
    }
}

function validarApellido(txtApellido, resultado, letra) {

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
}

function validarCorreoElectronico(txtemail, resultado, correo) {
    if (txtemail.value === "") {
        resultado = false;
        mensaje("Email es requerido", txtemail);
    } else if (!correo.test(txtemail.value)) {
        resultado = false;
        mensaje("Email no es correcto", txtemail);
    }
}

function validarFecha(txtFecha, resultado) {
    // validacion de fecha
    var dato = txtFecha.value;
    var fechaN = new Date(dato);
    var anioN = fechaN.getFullYear();

    var fechaActual = new Date();// fecha actual
    var anioA = fechaActual.getFullYear();
    if (fechaN > fechaActual) {
        resultado = false;
        mensaje("Fecha no puede ser superior a la actual", txtFecha);
    } else if (anioN < 1930) {
        resultado = false;
        mensaje("Anio de nacimiento no puede ser menor a 1930", txtFecha);
    } else if ((anioA - anioN) < 18) {
        resultado = false;
        mensaje("debe ser mayor de 18 años", txtFecha);
    }

}

function validarRadio(btnRadios, resultado) {
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
        mensaje("Debe seleccionar un genero", btnRadios[0]);
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

