// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/categs
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/conferencia
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/taller
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/conciertos
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/destacados

document.addEventListener('DOMContentLoaded', () => {

    const URL = 'https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/';
    const contenedorSelect = document.getElementById('contenedorSelect');
    const contenedorTarjetas = document.getElementById('contenedorTarjetas');
    let categoria;

    // **********************************inicio función para crear las tarjetas ******************************************/
    //nombre = evento.nombre
    //imagen = evento.imagen
    //descripcion = evento.descripcion
    const crearTarjeta = (nombre, imagen, descripcion) => {
        //Se crea en contenedor de la tarjeta
        const divCard = document.createElement('div');
        divCard.classList.add('card', 'm-1', 'shadow');
        divCard.style.width = '16rem';

        // Se crea el cuerpo de la tarjeta
        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');

        // Se crea el nombre/título del evento
        const nombreEvento = document.createElement('h4');
        nombreEvento.classList.add('card-title', 'text-center');
        nombreEvento.innerHTML = `<strong>Evento:</strong> ${nombre}`;

        // Se crea la imagen para agregar al cuerpo de la tarjeta
        const imagenEvento = document.createElement('img');
        imagenEvento.classList.add('card-img-top');
        imagenEvento.setAttribute('src', imagen);
        imagenEvento.setAttribute('alt', nombre);

        // Botón para mostrar u ocultar la descripción
        const botonDescripcion = document.createElement('button');
        botonDescripcion.classList.add('btn', 'btn-primary', 'btn-sm', 'mt-2');
        botonDescripcion.textContent = 'Mostrar descripción';

        // Descripción del evento
        const descripcionEvento = document.createElement('p');
        descripcionEvento.classList.add('card-text');
        descripcionEvento.style.display = 'none'; // Ocultar por defecto
        descripcionEvento.textContent = descripcion;

        // Evento de clic para mostrar/ocultar la descripción y cambiar el mensaje del botón
        botonDescripcion.addEventListener('click', () => {
            if (descripcionEvento.style.display === 'none') {
                descripcionEvento.style.display = 'block';
                botonDescripcion.textContent = 'Ocultar descripción';
            } else {
                descripcionEvento.style.display = 'none';
                botonDescripcion.textContent = 'Mostrar descripción';
            }
        });
        // Se agregan todos los subcomponentes a contenedor tarjeta 
        divCardBody.appendChild(nombreEvento);
        divCardBody.appendChild(imagenEvento);
        divCardBody.appendChild(botonDescripcion);
        divCardBody.appendChild(descripcionEvento);
        divCard.appendChild(divCardBody);
        contenedorTarjetas.appendChild(divCard);
    }
    //*************************************** fin de la función para crear las tarjetas*************************************

    // Se muestran los eventos destacados al cargar la vista

    fetch(URL + 'events/destacados')
        .then(res=>res.json())
        .then(datos =>{
            console.log(datos)
            datos.destacados.forEach(evento => {
                crearTarjeta(evento.nombre, evento.imagen, evento.descripcion);
            })
        })
        .catch(err =>{
            console.log('Error en la petición de los eventos destacados', err);
        })


    // Se crea el selector y se crean las tarjetas según la selección
    fetch(URL + 'categs')
        .then(res => res.json())
        .then(datos => {


            const selector = document.createElement('select');
            selector.setAttribute('id', 'selectOpciones');
            selector.classList.add('form-select-sm', 'mb-3');

            // Opción inicial deshabilitada y seleccionada por defecto
            const defaultOption = document.createElement('option');
            defaultOption.setAttribute('value', '');
            defaultOption.textContent = 'Tipos de eventos';
            defaultOption.setAttribute('disabled', true);
            defaultOption.setAttribute('selected', true);
            selector.appendChild(defaultOption);

            datos.tipos_evento.forEach(element => {
                const option = document.createElement('option');
                option.value = element.nombre;
                option.textContent = element.nombre;
                selector.appendChild(option);
            });

            // Se añade el select al DOM
            contenedorSelect.appendChild(selector);

            // Se crea un evento ONCHANGE sobre el select para que se pueda elegir la categoría.
            document.getElementById('selectOpciones').addEventListener('change', (e) => {

                //Oculta el título de eventos destacados cuando hay un cambio en el selector
                document.getElementById('tituloEventosDestacados').style.display = 'none';

                // OJO e.target.value devuelve un string
                categoria = `events/${e.target.value}`


                // Una vez que se ha elegido la categoría se hace una petición para esa categoría en concreto
                console.log(`TR: Se ha elegido: ${categoria}`)

                console.log(`A ver como se monta la url con la categoría?==> ${URL + categoria}`)

                fetch(URL + categoria)
                    .then(res => res.json())
                    .then(datos => {
                        console.log(datos)
                        // Se vacía el contenedor de tarjetas con cada nuevo select
                        contenedorTarjetas.innerHTML = '';

                        //Se recorre el array para ir creando las distintas tarjetas
                        datos.eventos.forEach(evento => {
                            crearTarjeta(evento.nombre, evento.imagen, evento.descripcion);
                        })

                    })
                    .catch(err => {
                        console.log('Hay un error en la petición del evento por categoría', err)
                    })
            })

        })
        .catch(err => {
            console.log('Hay un error en la petición del select', err)
        })
});

