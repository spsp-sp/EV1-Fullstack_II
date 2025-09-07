// Comentario: Mostrar mensaje al hacer clic en botón de producto
document.querySelectorAll('.btn-detalle').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-producto');
        document.getElementById('login-mensaje').innerText = `Has seleccionado el producto ${id}`;
    });
});

// Comentario: Mostrar mensaje al hacer clic en botón de blog
document.querySelectorAll('.btn-detalle-blog').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-blog');
        alert(`Detalle del Blog ${id}`);
    });
});

// Comentario: Función para iniciar sesión sin campos de entrada
document.getElementById('btn-login').addEventListener('click', () => {
    // Comentario: Acción simulada de inicio de sesión
    document.getElementById('login-mensaje').innerText = 'Sesión iniciada (modo demostración)';
});

// Comentario: Función para registrar usuario sin campos de entrada
document.getElementById('btn-registro').addEventListener('click', () => {
    // Comentario: Acción simulada de registro
    document.getElementById('login-mensaje').innerText = 'Usuario registrado (modo demostración)';
});