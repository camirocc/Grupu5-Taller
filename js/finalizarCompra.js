// Elementos donde se mostrará el subtotal, costo de envío y total
     const subtotalElement = document.getElementById("subtotal");
     const envioElement = document.getElementById("envio");
     const totalElement = document.getElementById("total");

     // Función para calcular el subtotal de los productos en el carrito
     function calcularSubtotal() {
         const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
         let subtotal = 0;
         carrito.forEach(producto => {
             subtotal += producto.cost * producto.quantity;  // Multiplica precio por cantidad
         });
         return subtotal;
     }

     // Función para calcular el costo de envío según la opción seleccionada
     function calcularEnvio(subtotal) {
         let costoEnvio = 0;

         // Obtiene la opción de envío seleccionada
         const envioSeleccionado = document.querySelector('input[name="formaDeEnvio"]:checked');
         if (envioSeleccionado) {
             switch (envioSeleccionado.value) {
                 case "Premium (2 a 5 días)":
                     costoEnvio = 10;  // Costo de envío para Premium
                     break;
                 case "Express (5 a 8 días)":
                     costoEnvio = 5;   // Costo de envío para Express
                     break;
                 case "Standard (12 a 15 días)":
                     costoEnvio = 2;   // Costo de envío para Standard
                     break;
                 default:
                     costoEnvio = 0;   // Si no se selecciona ninguna opción
                     break;
             }
         }

         return costoEnvio;
     }

     // Función para actualizar el total
     function actualizarTotal() {
         const subtotal = calcularSubtotal();  // Calcula el subtotal
         const costoEnvio = calcularEnvio(subtotal);  // Calcula el costo de envío
         const total = subtotal + costoEnvio;  // El total es la suma del subtotal y el costo de envío

         // Actualiza los valores en la interfaz
         subtotalElement.textContent = subtotal.toFixed(2);  // Muestra el subtotal
         envioElement.textContent = costoEnvio.toFixed(2);   // Muestra el costo de envío
         totalElement.textContent = total.toFixed(2);       // Muestra el total final
     }

     // Event listener para escuchar cuando el usuario cambie la opción de envío
     const opcionesEnvio = document.querySelectorAll('input[name="formaDeEnvio"]');
     opcionesEnvio.forEach(opcion => {
         opcion.addEventListener("change", function () {
             actualizarTotal();  // Recalcula el total cuando cambian la opción de envío
         });
     });
    


