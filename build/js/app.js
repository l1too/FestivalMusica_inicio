document.addEventListener("DOMContentLoaded", function(){
    iniciarApp()
})

function iniciarApp() {
    crearGaleria();
    scrollNav();
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach (enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccionScroll2 = "."+seccionScroll.substr(1);
            const seccion = document.querySelector(seccionScroll2);
            seccion.scrollIntoView({ behavior:"smooth" });
        });
    })
}

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");
    
    for(let i = 1 ; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen vocalista">
        `;
        imagen.onclick = function(){
            mostraImagen(i);
        }


        galeria.appendChild(imagen);
    }
}

function mostraImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen vocalista">
    `;

    //crear overlay y agrega imagenes
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    // cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);


    //agrega el overlay al body
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}