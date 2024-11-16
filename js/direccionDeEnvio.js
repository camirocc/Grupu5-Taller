document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formEnvio');
  const finalizarCompraButton = document.getElementById('finalizarCompra');
  
  const departamento = document.getElementById('departamento');
  const calle = document.getElementById('calle');
  const numero = document.getElementById('numero');
  const localidad = document.getElementById('localidad');
  const esquina = document.getElementById('esquina');
  const codigoPostal = document.getElementById('codigoPostal');
  
  const envio = document.querySelector('input[name="envio"]:checked'); // Forma de envío seleccionada
  const cantidadProductos = document.querySelectorAll('.cantidadProducto'); // Cantidad de productos
  const formaPago = document.querySelector('input[name="formaPago"]:checked'); // Forma de pago seleccionada
  
  const tarjetaNumero = document.getElementById('tarjetaNumero');
  const tarjetaVencimiento = document.getElementById('tarjetaVencimiento');
  const tarjetaCVV = document.getElementById('tarjetaCVV');
  
  // Función para añadir el estado inválido
  const marcarInvalido = (input) => {
    input.classList.add('is-invalid');
    input.setCustomValidity('Este campo es obligatorio.');
  };
  
  // Función para validar los campos
  const validarCompra = () => {
    let valid = true;
    
    // Limpiar las validaciones previas
    form.querySelectorAll('.form-control').forEach(input => {
      input.classList.remove('is-invalid');
      input.setCustomValidity('');
    });
    
    // Validar los campos de dirección
    const direccionInputs = [departamento, calle, numero, localidad, esquina, codigoPostal];
    direccionInputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        marcarInvalido(input);
      }
    });
    
    // Validar forma de envío
    if (!envio) {
      valid = false;
      document.querySelector('.envio-group').classList.add('is-invalid');
      envio.setCustomValidity('Debes seleccionar una forma de envío.');
    }
    
    // Validar cantidad de productos
    cantidadProductos.forEach(input => {
      if (parseInt(input.value) <= 0) {
        valid = false;
        input.classList.add('is-invalid');
        input.setCustomValidity('La cantidad debe ser mayor a 0.');
      }
    });
    
    // Validar forma de pago
    if (!formaPago) {
      valid = false;
      document.querySelectorAll('input[name="formaPago"]').forEach(input => input.classList.add('is-invalid'));
      document.getElementById('formaPagoGroup').classList.add('is-invalid');
    }
    
    // Validar los campos de tarjeta de crédito
    if (formaPago && formaPago.value === 'tarjeta') {
      if (!tarjetaNumero.value.trim() || !tarjetaVencimiento.value.trim() || !tarjetaCVV.value.trim()) {
        valid = false;
        if (!tarjetaNumero.value.trim()) tarjetaNumero.classList.add('is-invalid');
        if (!tarjetaVencimiento.value.trim()) tarjetaVencimiento.classList.add('is-invalid');
        if (!tarjetaCVV.value.trim()) tarjetaCVV.classList.add('is-invalid');
        tarjetaNumero.setCustomValidity('Debes completar todos los campos de tarjeta.');
      }
    }
    
    return valid;
  };
  
  // Manejo del clic en "Finalizar compra"
  finalizarCompraButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el envío del formulario
    
    const valid = validarCompra();
    
    if (valid) {
      alert('Compra realizada con éxito');
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  });
});

  