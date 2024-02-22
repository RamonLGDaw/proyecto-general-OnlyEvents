// Función para crear las tarjetas
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
    divCardBody.classList.add('card-body', 'd-flex', 'flex-column');

    const nombreEvento = document.createElement('h4');
    nombreEvento.classList.add('card-title', 'text-center');
    nombreEvento.innerHTML = `<strong>Evento:</strong> ${nombre}`;

    const divImagenContainer = document.createElement('div');
    divImagenContainer.classList.add('text-center', 'mb-3'); // Clases de Bootstrap para centrar y agregar espacio en la parte inferior
    const imagenEvento = document.createElement('img');
    imagenEvento.classList.add('img-fluid'); // Clase para hacer la imagen responsive
    imagenEvento.setAttribute('src', imagen);
    imagenEvento.setAttribute('alt', nombre);
    divImagenContainer.appendChild(imagenEvento);

    const valoracionEvento = document.createElement('div');
    valoracionEvento.classList.add('d-flex', 'justify-content-center','mt-auto','mb-1')
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
    divCardBody.appendChild(divImagenContainer);
    divCardBody.appendChild(valoracionEvento)
    divCardBody.appendChild(btnInfo);
    divCard.appendChild(divCardBody);
    contenedorTarjetas.appendChild(divCard);
    pintarEstrellas();
}
        