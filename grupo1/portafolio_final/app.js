// Código JS para abrir la ventana

// Asignar una función flecha de JS al evento load (salta cuando está cargada la página 
// en el navegador )
window.onload = () => {

    // Capturamos la ventana modal:
    const imagenModal = document.getElementById('imagen-modal')
    console.log('src de la ventana modal'+ imagenModal.src)

    // Seleccionar todos los contenedores con imagen a partir de la clase: contenedor-img 
    const imagenes = document.querySelectorAll('.contenedor-img')
    console.log('Numero de contenedores: '+ imagenes.length)

    // Recorrer el array de contenedores:
    imagenes.forEach((imagen)=>{
        // Añadir evento click a cada uno de los contenedores de la imagen
        imagen.addEventListener('click', ()=>{
            // Captura la imagen que tiene cada contenedor y copia la ruta a la ventana modal
            const pathImagen = imagen.querySelector('img').src
            //console.log('Copiar la ruta : ' + pathImagen)
            imagenModal.src = pathImagen
        })
    })

    // ESTABLECER EL ANCHO DE LAS BARRAS DE PROGRESO:
    // Seleccionar las barras de progreso:
    const barrasProgreso = document.querySelectorAll('.progress-bar')
    //console.log('barras de progreso: '+barrasProgreso.length)
    barrasProgreso.forEach((barra)=>{
        let porcentaje = barra.ariaValueNow
        //console.log('Porcentaje: '+porcentaje)
        barra.style.width = porcentaje + "%";
    })
}