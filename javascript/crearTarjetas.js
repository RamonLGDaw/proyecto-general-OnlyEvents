// Función para crear las tarjetas
const crearTarjeta = (evento) => {
    const { nombre, imagen, descripcion } = evento;

    const divCard = document.createElement('div');
    divCard.classList.add('card', 'm-1', 'shadow');
    divCard.style.width = '16rem';

    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body', 'd-flex', 'justify-content-center', 'flex-column');

    const nombreEvento = document.createElement('h4');
    nombreEvento.classList.add('card-title', 'text-center');
    nombreEvento.innerHTML = `<strong>Evento:</strong> ${nombre}`;

    const imagenEvento = document.createElement('img');
    imagenEvento.classList.add('card-img-top');
    imagenEvento.setAttribute('src', imagen);
    imagenEvento.setAttribute('alt', nombre);

    const btnInfo = document.createElement('button');
    btnInfo.classList.add('btn', 'btn-primary', 'btn-sm', 'mt-3');
    btnInfo.textContent = 'Más info';

    btnInfo.addEventListener('click', () => {
        mostrarDetalle(evento);

        // Comprobación de lo que hay dentro de evento
        console.log(`Que hay dentro del evento?? ${evento}`) // devuelve [object][object] ?? 
        console.log(evento)
    });

    divCardBody.appendChild(nombreEvento);
    divCardBody.appendChild(imagenEvento);
    divCardBody.appendChild(btnInfo);
    divCard.appendChild(divCardBody);
    contenedorTarjetas.appendChild(divCard);
}

