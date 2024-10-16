var nombreUsuario = localStorage.getItem('usuario');

if (nombreUsuario) {
    document.getElementById('usuarioBarraBtn').textContent = nombreUsuario;
}
