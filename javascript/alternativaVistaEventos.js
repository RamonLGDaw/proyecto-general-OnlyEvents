// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/categs
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/conferencia
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/taller
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/conciertos

document.addEventListener('DOMContentLoaded', () => {

    const URL = 'https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/';
    const contenedorSelect = document.getElementById('contenedorSelect');
    let categoria;


    fetch(URL + 'categs')
        .then(res => res.json())
        .then(datos => {
            console.log(`Esto es lo que hay dentro de categs =>>`)
            console.log(datos)
            const selector = document.createElement('select');
            selector.setAttribute('id', 'selectOpciones');
            selector.classList.add('form-select-sm', 'mb-3');

            // Opción deshabilitada y seleccionada por defecto
            const defaultOption = document.createElement('option');
            defaultOption.setAttribute('value', '');
            defaultOption.textContent = 'Tipos de eventos';
            defaultOption.setAttribute('disabled', true);
            defaultOption.setAttribute('selected', true);
            selector.appendChild(defaultOption);


            datos.tipos_evento.forEach(element => {
                const option = document.createElement('option');
                option.value = element.id;
                option.textContent = element.nombre;
                selector.appendChild(option);
            });

            // Se añade el select al DOM
            contenedorSelect.appendChild(selector);

            // Se crea un evento ONCHANGE sobre el select para que se pueda elegir la categoría.
            document.getElementById('selectOpciones').addEventListener('change', (e) => {
                console.log('hasta aquí funciona');
                // e.target.value devuelve tipo string
                switch (e.target.value) {
                    case '1':
                        categoria = 'events/conferencia';
                        break;
                    case '2':
                        categoria = 'events/conciertos';
                        break;
                    case '3':
                        categoria = 'events/taller';
                        break;
                }

                // Una vez que se ha elegido la categoría se hace una petición para esa categoría en concreto
                console.log(`TR: Se ha elegido: ${categoria}`)

                console.log(`A ver como se monta la url con la categoría?==> ${URL + categoria}`)

                fetch(URL + categoria)
                    .then(res => res.json())
                    .then(datos => {
                        console.log(datos)

                        //Falta eliminar los eventos de la selección anterior

                        //Revisar toda esta parte de código porque es la de eventos destacados

                        // Mostrar los eventos que se han seleccionado por categoría:
                        const contenedorEventosDestacados = document.createElement('div');
                        contenedorEventosDestacados.classList.add('contenedorEventos', 'mx-auto');
                        datos.eventos.forEach(evento => {
                            const divCard = document.createElement('div');
                            divCard.classList.add('card', 'm-1', 'shadow');
                            divCard.style.width = '16rem';

                            const divCardBody = document.createElement('div');
                            divCardBody.classList.add('card-body');
                            divCardBody.setAttribute('id', `inden${evento.id}`);

                            const nombreEvento = document.createElement('h4');
                            nombreEvento.classList.add('card-title', 'text-center');
                            nombreEvento.innerHTML = `<strong>Evento:</strong> ${evento.nombre}`;

                            // Agregar la imagen al cuerpo de la tarjeta
                            const imagenEvento = document.createElement('img');
                            imagenEvento.classList.add('card-img-top');
                            imagenEvento.setAttribute('src', evento.imagen);
                            imagenEvento.setAttribute('alt', evento.nombre);

                            // Botón para mostrar u ocultar la descripción
                            const botonDescripcion = document.createElement('button');
                            botonDescripcion.classList.add('btn', 'btn-primary', 'btn-sm', 'mt-2');
                            botonDescripcion.textContent = 'Mostrar descripción';

                            // Descripción del evento
                            const descripcionEvento = document.createElement('p');
                            descripcionEvento.classList.add('card-text');
                            descripcionEvento.style.display = 'none'; // Ocultar por defecto
                            descripcionEvento.textContent = evento.descripción;

                            // Evento de clic para mostrar u ocultar la descripción
                            botonDescripcion.addEventListener('click', () => {
                                if (descripcionEvento.style.display === 'none') {
                                    descripcionEvento.style.display = 'block';
                                    botonDescripcion.textContent = 'Ocultar descripción';
                                } else {
                                    descripcionEvento.style.display = 'none';
                                    botonDescripcion.textContent = 'Mostrar descripción';
                                }
                            });

                            divCardBody.appendChild(nombreEvento);
                            divCardBody.appendChild(imagenEvento);
                            divCardBody.appendChild(botonDescripcion);
                            divCardBody.appendChild(descripcionEvento);
                            divCard.appendChild(divCardBody);
                            contenedorEventosDestacados.appendChild(divCard);
                        });

                        // Agregar los eventos destacados al DOM
                        document.getElementById('contenedorEventosDestacados').insertAdjacentElement('beforeend', contenedorEventosDestacados);

                    })
                    .catch(err =>{
                        console.error('Hay un error en la petición del evento por categoría')
                    })
            })

        })
        .catch(err => {
            console.error('Hay un error en la petición del select', err)
        })


    f
})