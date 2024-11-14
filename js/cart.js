var nombreUsuario = localStorage.getItem('usuario');

if (nombreUsuario) {
    document.getElementById('usuarioBarraBtn').textContent = nombreUsuario;

}

document.addEventListener("DOMContentLoaded", () => {
    const cartContenedor = document.getElementById("cart_Contenedor");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        cartContenedor.innerHTML = "<p>No hay productos en el carrito.</p>";
    } else {
        cartContenedor.innerHTML = carrito.map((producto, index) => `

    <div class="card";>
        <div class="row g-0">
            <div class="col-md-4 d-flex justify-content-center align-items-center">
                <img src="${producto.images[0]}" alt="${producto.name}" class="img-fluid"">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${producto.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <strong>${producto.currency}</strong> <span class="product-total-cost" data-unit-price="${producto.cost}">
                           <strong> ${(producto.cost * producto.quantity).toFixed(0)} </strong>
                        </span>
                    </h6>
                    <div class="d-flex align-items-center mt-2">
                        <button class="btn btn-outline-secondary btn-sm decreaseBtn" data-index="${index}" type="button">-</button>
                        <input type="number" class="form-control form-control-sm text-center mx-2 inputCantidad" data-index="${index}" value="${producto.quantity}" min="1" style="width: 60px;">
                        <button class="btn btn-outline-secondary btn-sm increaseBtn" data-index="${index}" type="button">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>          
    `).join('');

        const buyButton = document.createElement("button");
        buyButton.textContent = "Comprar";
        buyButton.classList.add("btn", "btn-primary", "mt-4", "w-100");
        buyButton.addEventListener("click", () => {
            alert("Procesando compra...");
            localStorage.removeItem("carrito"); // Limpiar el carrito después de la compra
            window.location.reload(); // Recargar la página para reflejar el carrito vacío
        });
        cartContenedor.appendChild(buyButton);

        // JavaScript para los botones de incremento y decremento            
        const increaseBtn = document.querySelectorAll(".increaseBtn");
        increaseBtn.forEach((button) => {
            button.addEventListener("click", () => {
                const index = button.getAttribute("data-index")
                actualizarCantidad(index, 1)
            })
        });

        const decreaseBtn = document.querySelectorAll(".decreaseBtn");
        decreaseBtn.forEach((button) => {
            button.addEventListener("click", () => {
                const index = button.getAttribute("data-index")
                actualizarCantidad(index, -1)
            })
        });

        const inputCantidad = document.querySelectorAll(".inputCantidad");
        inputCantidad.forEach((input) => {
            input.addEventListener("input", () => {
                const index = input.getAttribute("data-index")
                const newQuantity = parseInt(input.value) || 1
                actualizarCantidad(index, 0, newQuantity)
            })
        })
    }

    // Función para actualizar la cantidad de un producto del carrito en el localStorage
    function actualizarCantidad(index, cambio, setQuantity = null) {
        const carrito = JSON.parse(localStorage.getItem("carrito"))
        const producto = carrito[index]

        // Si no hay cantidad, ponemos 1 por defecto
        if (setQuantity !== null) {
            producto.quantity = setQuantity
        } else {
            producto.quantity = Math.max(1, producto.quantity + cambio)
        }

        const productTotalElement = document.querySelectorAll(".product-total-cost")[index]
        const unitPrice = parseFloat(productTotalElement.getAttribute("data-unit-price"))
        productTotalElement.textContent = (unitPrice * producto.quantity)

        // Actualizamos el input de cantidad (número)
        document.querySelectorAll(".inputCantidad")[index].value = producto.quantity

        // Actualizamos el carrito con la nueva cantidad modificada
        localStorage.setItem("carrito", JSON.stringify(carrito))

        actualizarContadorCarrito()
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const quantityInputs = document.querySelectorAll('.product-quantity'); // selecciona los campos de cantidad .product-quantity y agrega un evento input para recalcular el subtotal cada vez que el valor cambia.

    quantityInputs.forEach(input => {
        input.addEventListener('input', function () {
            const productRow = input.closest('.product-row');
            const priceElement = productRow.querySelector('.product-price');
            const subtotalElement = productRow.querySelector('.product-subtotal');

            const price = parseFloat(priceElement.getAttribute('data-price')); // Toma el precio unitario desde el atributo data-price
            const quantity = parseInt(input.value) || 0; // Asegura que quantity sea un número, incluso si el input está vacío

            const subtotal = price * quantity;
            subtotalElement.textContent = subtotal.toFixed(2); // Actualiza el subtotal con el valor calculado
        });
    });
});
