// Elementos donde se mostrará el subtotal, costo de envío y total
const subtotalElement = document.getElementById("subtotal");
const envioElement = document.getElementById("envio");
const totalElement = document.getElementById("total");

// Función para calcular el subtotal de los productos en el carrito
function calcularSubtotal() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    return carrito.reduce((subtotal, producto) => subtotal + producto.cost * producto.quantity, 0);
}

// Función para calcular el costo de envío basado en la selección guardada en localStorage
function calcularEnvio(subtotal) {
    const formaDeEnvio = localStorage.getItem("formaDeEnvio"); // Obtener forma de envío guardada
    if (!formaDeEnvio) return 0;

    switch (formaDeEnvio) {
        case "Premium (2 a 5 días)":
            return subtotal * 0.15; // 15% del subtotal
        case "Express (5 a 8 días)":
            return subtotal * 0.07; // 7% del subtotal
        case "Standard (12 a 15 días)":
            return subtotal * 0.05; // 5% del subtotal
        default:
            return 0;
    }
}

// Función para actualizar el total
function actualizarTotal() {
    const subtotal = calcularSubtotal(); // Calcula el subtotal
    const costoEnvio = calcularEnvio(subtotal); // Calcula el costo de envío
    const total = subtotal + costoEnvio; // Calcula el total

    // Actualiza los valores en la interfaz
    subtotalElement.textContent = subtotal.toFixed(2); // Muestra el subtotal
    envioElement.textContent = costoEnvio.toFixed(2); // Muestra el costo de envío
    totalElement.textContent = total.toFixed(2); // Muestra el total final
}

// Llama a la función para actualizar los valores al cargar la página
document.addEventListener("DOMContentLoaded", actualizarTotal);

// Botón para finalizar compra
const buyButton = document.getElementById("btnFinalizarCompra2");
buyButton.addEventListener("click", () => {
    // alert("Compra exitosa!");
    Swal.fire("Compra exitosa!");
    localStorage.removeItem("carrito"); // Limpia el carrito después de la compra
    localStorage.removeItem("formaDeEnvio"); // Limpia la selección de envío
    window.location.href="index.html"; // Recarga la página para reflejar el carrito vacío
});
