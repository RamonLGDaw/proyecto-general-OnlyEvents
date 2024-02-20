// Función para crear las tarjetas
const crearTarjeta = (evento, tarjetaIndex) => {
    const { nombre, imagen, valoracion } = evento;

    const pintarEstrellas = () => {
        for (let i = 0; i < 5; i++) {
            const estrellaId = `${tarjetaIndex}-${i}estrella`; // ID único para cada estrella
            if (i < valoracion) {
                document.getElementById(estrellaId).classList.add('colorEstrellaPintada');
            }
        }
    }

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

    const valoracionEvento = document.createElement('div');
    valoracionEvento.classList.add('d-flex', 'justify-content-center', 'mt-3')
    for (let i = 0; i < 5; i++) {
        const estrellaId = `${tarjetaIndex}-${i}estrella`; // ID único para cada estrella
        const estrella = document.createElement('i');
        estrella.setAttribute('id', estrellaId);
        estrella.classList.add('bi', 'bi-star-fill', 'mx-1', 'colorEstrellas');
        valoracionEvento.appendChild(estrella);
    }

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
    divCardBody.appendChild(valoracionEvento)
    divCardBody.appendChild(btnInfo);
    divCard.appendChild(divCardBody);
    contenedorTarjetas.appendChild(divCard);
    pintarEstrellas();
}
