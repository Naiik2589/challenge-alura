const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const mensajeError = document.querySelector(".mensaje-error");
const botonCopiar = document.querySelector(".btn-copiar");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.textContent = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
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
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.textContent = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
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
