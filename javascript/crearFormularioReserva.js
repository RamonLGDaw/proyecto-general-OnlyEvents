// Función para crear el formulario de reserva
const crearFormularioReserva = (evento) => {
    const divFormulario = document.createElement('div');
    divFormulario.classList.add('card', 'm-1', 'shadow');

    const formularioReserva = document.createElement('form');
    formularioReserva.classList.add('card-body');

    const tituloFormulario = document.createElement('h3');
    tituloFormulario.textContent = 'Selecciona tus preferencias';
    formularioReserva.appendChild(tituloFormulario);

    const divFormGroupFecha = document.createElement('div');
    divFormGroupFecha.classList.add('form-group');

    const labelFecha = document.createElement('label');
    labelFecha.setAttribute('for', 'selectFecha');
    labelFecha.textContent = 'Seleccione una Fecha Disponible:';
    
    const selectFecha = document.createElement('select');
    selectFecha.classList.add('form-control');
    selectFecha.setAttribute('id', 'selectFecha');

    evento.fecha.forEach(fecha => {
        const option = document.createElement('option');
        option.textContent = fecha;
        selectFecha.appendChild(option);
    });

    divFormGroupFecha.appendChild(labelFecha);
    divFormGroupFecha.appendChild(selectFecha);

    const divFormGroupLocalizacion = document.createElement('div');
    divFormGroupLocalizacion.classList.add('form-group');

    const labelLocalizacion = document.createElement('label');
    labelLocalizacion.textContent = 'Localización del Evento:';
    
    const inputLocalizacion = document.createElement('input');
    inputLocalizacion.classList.add('form-control');
    inputLocalizacion.setAttribute('type', 'text');
    inputLocalizacion.setAttribute('readonly', 'true');
    inputLocalizacion.value = evento.localizacion;

    const botonPagar = document.createElement('a');
    botonPagar.classList.add('btn', 'btn-primary', 'mt-2');
    botonPagar.textContent = 'Pagar';
    botonPagar.setAttribute('href', '#'); // Agregar enlace vacío

    divFormGroupLocalizacion.appendChild(labelLocalizacion);
    divFormGroupLocalizacion.appendChild(inputLocalizacion);

    formularioReserva.appendChild(divFormGroupFecha);
    formularioReserva.appendChild(divFormGroupLocalizacion);
    formularioReserva.appendChild(botonPagar);

    divFormulario.appendChild(formularioReserva);

    contenedorDetalle.appendChild(divFormulario);
}
