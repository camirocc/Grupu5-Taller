var nombreUsuario = localStorage.getItem('usuario');

if (nombreUsuario) {
    document.getElementById('usuarioBarraBtn').textContent = nombreUsuario;

}

document.addEventListener("DOMContentLoaded", () => {
        const cartContenedor = document.getElementById("cart_Contenedor");
        const productData = JSON.parse(localStorage.getItem("productInfo")) || []; 
        console.log(productData)
    
        if (!productData) {
            cartContenedor.innerHTML = "<p>No hay productos en el carrito.</p>";
        } else {
            let productImage;

if (Array.isArray(productData.images) && productData.images.length > 0) {
    productImage = productData.images[0]; // Asigna la primera imagen si es un array y tiene elementos
} else {
    productImage = productData.image; // Asigna la imagen directamente si no es un array
}
            cartContenedor.innerHTML = `
                <img src="${productImage}" class="d-block w-100" alt="${productData.name}">
                <div class="containerVendCat">
                    <div class="borde">
                        <h2 id="product-category">Categoría: ${productData.id}</h2>
                        <h1 id="product-name">${productData.name}</h1>
                        <h3 id="product-price">USD ${productData.cost}</h3>
                    <!-- <p id="sold-count">Cantidad: ${productData.quantity}</p> --!>
    
                            <!-- Alineación en una fila con d-flex -->
                            <div class="d-flex align-items-center">
                                <div class="input-group input-group-sm me-2" style="width: 120px;">
                                    <button class="btn btn-outline-secondary btn-sm" id="decreaseBtn" type="button">-</button>
                                    <input type="number" class="form-control form-control-sm text-center" id="inputCantidad" value="${productData.quantity}" min="1" style="max-width: 50px;">
                                    <button class="btn btn-outline-secondary btn-sm" id="increaseBtn" type="button">+</button>
                                </div>
                                <button id="buyButton" class="btn btn-primary btn-sm">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    
            // JavaScript para los botones de incremento y decremento
            const inputCantidad = document.getElementById("inputCantidad");
            const decreaseBtn = document.getElementById("decreaseBtn");
            const increaseBtn = document.getElementById("increaseBtn");
    
            increaseBtn.addEventListener("click", () => {
                inputCantidad.value = parseInt(inputCantidad.value) + 1;
            });
    
            decreaseBtn.addEventListener("click", () => {
                if (parseInt(inputCantidad.value) > 1) {
                    inputCantidad.value = parseInt(inputCantidad.value) - 1;
                }
            });
        }
    });
    