document.addEventListener('DOMContentLoaded', () => {
  // Obtener el formulario y los campos
  const form = document.querySelector('.form-envio');
  const btnContinuar = document.getElementById('btnDireccionContinuar');
  
  const departamento = document.getElementById('departamento');
  const calle = document.getElementById('calle');
  const numero = document.getElementById('numero');
  const localidad = document.getElementById('localidad');
  const esquina = document.getElementById('esquina');
  const codigoPostal = document.getElementById('codigoPostal');

  // Función para limpiar las validaciones previas (devolver a estado "normal")
  const limpiarValidaciones = () => {
    form.querySelectorAll('.form-control').forEach(input => {
      input.classList.remove('is-invalid');
      input.setCustomValidity('');  // Limpiar mensaje de validación personalizado
    });
  };

  // Función para aplicar la clase 'is-invalid' a un campo
  const marcarInvalido = (input) => {
    input.classList.add('is-invalid');
    input.setCustomValidity('Este campo es obligatorio.');
  };

  // Función de validación de todos los campos
  const validarDireccion = () => {
    let valid = true;  // Asumimos que está todo bien hasta que se demuestre lo contrario
    
    limpiarValidaciones();  // Limpiar cualquier estado previo de validación

    // Validar Departamento
    if (!departamento.value) {
      valid = false;
      marcarInvalido(departamento);
    }

    // Validar Calle
    if (!calle.value.trim()) {
      valid = false;
      marcarInvalido(calle);
    }

    // Validar Número (solo números)
    if (!numero.value.trim() || isNaN(numero.value)) {
      valid = false;
      marcarInvalido(numero);
    }

    // Validar Localidad
    if (!localidad.value.trim()) {
      valid = false;
      marcarInvalido(localidad);
    }

    // Validar Esquina
    if (!esquina.value.trim()) {
      valid = false;
      marcarInvalido(esquina);
    }

    // Validar Código Postal (solo números)
    if (!codigoPostal.value.trim() || isNaN(codigoPostal.value)) {
      valid = false;
      marcarInvalido(codigoPostal);
    }

    return valid;
  };

  // Lógica del botón "Continuar"
  btnContinuar.addEventListener('click', (event) => {
    event.preventDefault();  // Prevenir el envío del formulario
    
    const esValido = validarDireccion();  // Validamos los campos

    if (esValido) {
      // Si es válido, redirigimos al siguiente paso
      alert('Dirección validada correctamente.');
      window.location.href = 'formaDePago.html';  // Redirigir a la forma de pago
    } else {
      // Si no es válido, mostramos un mensaje de error
      alert('Por favor, completa todos los campos correctamente.');
    }
  });
});

