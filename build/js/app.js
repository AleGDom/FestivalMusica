document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
    navegacionFija();
}

function navegacionFija(){
    const barra = document.querySelector('header');
    const sobrefestival= document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

    window.addEventListener('scroll',function(){
        //console.log(sobrefestival.getBoundingClientRect());
        if(sobrefestival.getBoundingClientRect().top<0){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });


}


function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML=`
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria ${i}">`;
        console.log(imagen);

        imagen.addEventListener('click',e=>{
            mostrarImagen(i);
        })
        galeria.appendChild(imagen);   
    }
}

function mostrarImagen(id){
    const imagen = document.createElement('picture');
    imagen.innerHTML=`
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria ${id}">
    `;

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.addEventListener('click',()=>{
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    })
    const cerrarModal = document.createElement('p');
    cerrarModal.textContent='X';
    cerrarModal.classList.add('btn-cerrar')
    cerrarModal.addEventListener('click',function(){
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    })
    overlay.appendChild(cerrarModal);
    const body = document.querySelector('body');
    body.classList.add('fijar-body');
    body.appendChild(overlay);
}

const enlaces = document.querySelectorAll('.navegacion-principal a');

enlaces.forEach(enlace=>{
    enlace.addEventListener('click',e=>{
        e.preventDefault();
        const seccion=e.target.attributes.href.value;
        const selector = document.querySelector(seccion);
        selector.scrollIntoView({behavior:'smooth'});
    })
})



