document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html";
    });

    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html";
    });

    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html";
    });

    
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "login.html";
    }
});

// Funcionalidad para el botón de cerrar sesión
document.getElementById('logout-btn').addEventListener('click', function() {
    // Elimina el usuario del localStorage
    localStorage.removeItem('usuario');
    localStorage.removeItem('loggedIn'); // Elimina el estado de sesión si corresponde
    window.location.href = 'login.html'; // Redirige a la pantalla de inicio de sesión
}); 


var nombreUsuario = localStorage.getItem('usuario');

if (nombreUsuario) {
    document.getElementById('usuarioBarraBtn').textContent = nombreUsuario;
}

