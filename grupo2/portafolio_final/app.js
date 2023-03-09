// Código para añadir eventos click a cada contenedor de imagen:

window.onload = () => {

    // Capturar la imagen de la ventana modal:
    const imagenModal = document.getElementById('imagen-modal')

    // Capturar todos los contenedores de imagen:
    const imagenes = document.querySelectorAll('.contenedor-img')

    //console.log('Ventana modal: '+imagenModal.src)
    //console.log('Imagenes:'+ imagenes.length)

    imagenes.forEach((imagen)=>{
        imagen.addEventListener('click', () => {
            const pathImg = imagen.querySelector('img').src;
            //console.log("path:"+pathImg);
            //console.log('imagenModal.src: '+imagenModal.src);
            imagenModal.src = pathImg;
        });
    });
}