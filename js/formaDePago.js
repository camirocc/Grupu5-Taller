document.addEventListener("DOMContentLoaded", () => {
    const tarjetaCreditoButton = document.getElementById("tarjetaCredito");
    const transferenciaBancariaButton = document.getElementById("transfBancaria");
    const continuarButton = document.getElementById("btnDireccionContinuar");

    let formaDePagoSeleccionada = null;

    // Función para seleccionar la forma de pago
    function seleccionarFormaDePago(tipo) {
        formaDePagoSeleccionada = tipo;
        localStorage.setItem("formaDePago", formaDePagoSeleccionada); // Guarda la selección en localStorage
        // alert(`Has seleccionado: ${formaDePagoSeleccionada}`);
        Swal.fire(`Has seleccionado: ${formaDePagoSeleccionada}`);
    }

    // Listeners para los botones de forma de pago
    tarjetaCreditoButton.addEventListener("click", () => seleccionarFormaDePago("Tarjeta de Crédito"));
    transferenciaBancariaButton.addEventListener("click", () => seleccionarFormaDePago("Transferencia Bancaria"));

    // Validar y continuar
    continuarButton.addEventListener("click", () => {
        console.log(formaDePagoSeleccionada)
        if (formaDePagoSeleccionada) {
            window.location.href = "finalizarCompra.html"; // Redirige a la pantalla de finalizar compra
        } else {
            // alert("Por favor, selecciona una forma de pago antes de continuar.");
            Swal.fire("Por favor, selecciona una forma de pago antes de continuar.");
        }
    });
});
