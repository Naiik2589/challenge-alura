const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const mensajeError = document.querySelector(".mensaje-error");
const botonCopiar = document.querySelector(".btn-copiar");

function mostrarMensajeError() {
    mensaje.style.backgroundImage = "url('img/Muneco.png')";
    mensajeError.innerHTML = "<b style='font-size: 24px;'>Ningún mensaje fue encontrado</b><br><span style='font-size: 16px;'>Ingresa el texto que desees encriptar o desencriptar.</span>";
}

function btnEncriptar() {
    if (textArea.value.trim() === "") {
        mostrarMensajeError();
        return;
    }
    const textoEncriptado = encriptar(textArea.value);
    mensaje.textContent = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensajeError.innerHTML = ""; // Clear the error message
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    if (textArea.value.trim() === "") {
        mostrarMensajeError();
        return;
    }
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.textContent = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensajeError.innerHTML = ""; // Clear the error message
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    navigator.clipboard.writeText(mensaje.textContent)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch((error) => {
            console.error('Error al copiar texto:', error);
        });
}

document.querySelector("#copiar").addEventListener("click", copiarTexto);
