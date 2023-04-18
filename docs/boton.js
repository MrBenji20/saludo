function mostrarMensaje() {
    //limpiar();

    var mensaje = document.getElementById("mensaje");
    var nombre = document.getElementById("nombre").value;

    if (nombre == "Polett" || nombre == "polett") {
        mensaje.innerHTML = "Te amo " + nombre + " ♥";
        mostrarMensaje2();
    //} if (nombre == "") {
    //    mostrarMensajeError();
    } else {
        mensaje.innerHTML = nombre + " no eres la persona que busco ";
        noEresPolett();
    }

    console.log(nombre + '♥')
}

function limpiar() {
    var error = document.getElementById("espacioVacio");
    var mensaje2 = document.getElementById("mensaje2");
    var mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "";
    mensaje2.innerHTML = "";
    error.innerHTML = ""
}

function mostrarMensaje2() {
    var mensaje2 = document.getElementById("mensaje2");
    var mensaje3 = document.getElementById("mensaje3");
    var nombre = document.getElementById("nombre").value;
    mensaje2.innerHTML = nombre + ", Aquí tienes tu flor amarilla.";
    mensaje3.innerHTML = "Que tengas bonita noche y dulces sueños"
}

function noEresPolett() {
    var mensaje2 = document.getElementById("mensaje2");
    mensaje2.innerHTML = "Intente con otro nombre";
}

function mostrarMensajeError() {
    var error = document.getElementById("espacioVacio");
    error.innerHTML = "No se ha registrado ningun nombre"
}
