 // Cargar foto de perfil desde localStorage al cargar la página
 window.onload = function() {
    const profilePic = localStorage.getItem('profilePic');
    if (profilePic) {
        document.getElementById('profile-pic').src = profilePic;
    }
};

// Cambiar foto de perfil
document.getElementById('upload-btn').addEventListener('click', function() {
    document.getElementById('upload').click(); // Simula un clic en el input
});

document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Guardar la imagen en localStorage
            localStorage.setItem('profilePic', e.target.result);
            // Actualizar la imagen de perfil
            document.getElementById('profile-pic').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

let interruptor = document.querySelector (".form-check-input");

interruptor.addEventListener("click", () => {
document.body.classList.toggle("active");
localStorage.setItem('active', document.body.classList.contains('active'));
});
if (localStorage.getItem('active') === 'true') {
    document.body.classList.add('active');

}