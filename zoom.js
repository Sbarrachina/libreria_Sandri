
function mostrarImagenAmpliada(img) {
    var imagenAmpliada = document.getElementById('imagenAmpliada');
    var imagenAmpliadaContenido = imagenAmpliada.querySelector('img');
    imagenAmpliadaContenido.src = img.src;
    imagenAmpliada.style.display = 'flex';
}

function cerrarImagenAmpliada() {
    var imagenAmpliada = document.getElementById('imagenAmpliada');
    imagenAmpliada.style.display = 'none';
}






