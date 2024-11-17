document.addEventListener("DOMContentLoaded", () => {
    const opcionesEnvio = document.querySelectorAll('input[name="formaDeEnvio"]');
    const continuarButton = document.getElementById("btnDireccionEnvio");

    // Verifica que se haya seleccionado una opción antes de continuar
    continuarButton.addEventListener("click", () => {
        const envioSeleccionado = [...opcionesEnvio].find(opcion => opcion.checked); // Busca la opción seleccionada
        if (envioSeleccionado) {
            localStorage.setItem("formaDeEnvio", envioSeleccionado.value); // Guarda la opción seleccionada en localStorage
            window.location.href = "direccionDeEnvio.html"; // Redirige a la siguiente pantalla
        } else {
            alert("Por favor, selecciona una opción de envío antes de continuar."); // Mensaje de error
        }
    });
});
