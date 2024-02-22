
// Función para crear una tarjeta de detalle que recibe los datos del EVENTO

const crearTarjetaDetalle = (evento, reservado) => {
    const divCard = document.createElement('div');
    divCard.classList.add('card', 'm-1', 'shadow');
    divCard.style.width = '24rem'; // Ancho un poco más grande para los detalles

    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');

    const nombreEvento = document.createElement('h2');
    // Son estilos como el del título de 'eventos destacados'
    nombreEvento.classList.add('card-title', 'text-center', 'fw-bold', 'text-warning', 'roboto-font');
    nombreEvento.textContent = evento.nombre;

    const imagenEvento = document.createElement('img');
    imagenEvento.classList.add('card-img-top');
    imagenEvento.setAttribute('src', evento.imagen);
    imagenEvento.setAttribute('alt', evento.nombre);
    imagenEvento.style.maxWidth = '100%';

    const descripcionEvento = document.createElement('p');
    descripcionEvento.classList.add('card-text', 'my-2');
    descripcionEvento.textContent = evento.descripcion;

    const localizacionEvento = document.createElement('p');
    localizacionEvento.classList.add('card-text');
    localizacionEvento.innerHTML = `<strong>Localización:</strong> ${evento.localizacion}`;

    const fechaEvento = document.createElement('p');
    fechaEvento.classList.add('card-text');
    fechaEvento.innerHTML = `<strong>Próxima fecha:</strong> ${evento.fecha}`;

    const inclusivoEvento = document.createElement('p');
    inclusivoEvento.classList.add('card-text');
    inclusivoEvento.innerHTML = `<strong>Evento inclusivo:</strong> ${evento.inclusivo}`

    const precioEvento = document.createElement('p');
    precioEvento.classList.add('card-text');
    precioEvento.innerHTML = `<strong>Precio:</strong> $${evento.precio}`;

    const contenedorBotones = document.createElement('div');
    contenedorBotones.classList.add('d-flex', 'justify-content-around')

    const botonVolver = document.createElement('button');
    botonVolver.classList.add('btn', 'btn-primary', 'mt-2');
    botonVolver.textContent = 'Volver';

    botonVolver.addEventListener('click', () => {
        contenedorDetalle.innerHTML = ''; // Vaciar el contenido del contenedor de detalles
        contenedorTarjetas.style.display = 'flex'; // Mostrar el contenedor de tarjetas de la vista inicial
        contenedorSelect.style.display = 'flex'; // Mostrar el selector de categorías
    });

    const botonReservar = document.createElement('button');
    botonReservar.classList.add('btn', 'btn-primary', 'mt-2');
    botonReservar.textContent = "Reservar";

    botonReservar.addEventListener('click', () => {
        alert('Formulario reserva en construcción!!')
        contenedorDetalle.innerHTML = '';
        contenedorDetalle.innerHTML = 'Espacio en construcción';
        //Crear todo el formulario
        
    })

    divCardBody.appendChild(nombreEvento);
    divCardBody.appendChild(imagenEvento);
    divCardBody.appendChild(descripcionEvento);
    divCardBody.appendChild(inclusivoEvento);
    divCardBody.appendChild(localizacionEvento);
    divCardBody.appendChild(fechaEvento);
    divCardBody.appendChild(precioEvento);
    contenedorBotones.appendChild(botonVolver);

    if(!reservado){
        contenedorBotones.appendChild(botonReservar);
    }

    divCardBody.appendChild(contenedorBotones);

    divCard.appendChild(divCardBody);
    contenedorDetalle.appendChild(divCard);
}
