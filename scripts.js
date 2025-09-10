function sign_in() {
    // Obtener valores
    const emailInput = document.getElementById('exampleInputEmail1');
    const passwordInput = document.getElementById('exampleInputPassword1');
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validaciones simples
    if (email === "" || !email.includes("@")) {
        alert("Por favor ingresa un email válido");
        emailInput.focus();
        return;
    }

    if (password === "") {
        alert("Por favor ingresa tu contraseña");
        passwordInput.focus();
        return;
    }

    // Si todo está bien → redirige
    window.location.href = "home.html";
}



function validarFormulario() {
    // Limpiar errores anteriores
    const errorDiv = document.getElementById("errorMessages");
    errorDiv.innerHTML = "";

    // Obtener valores
    const name = document.getElementById("inputName").value.trim();
    const email = document.getElementById("inputEmail").value.trim();
    const confirmEmail = document.getElementById("inputConfirmEmail").value.trim();
    const password = document.getElementById("inputPassword").value;
    const confirmPassword = document.getElementById("inputConfirmPassword").value;

    let errores = [];

    if (name === "") {
        errores.push("El nombre no puede estar vacío.");
    }

    if (email === "") {
        errores.push("El correo electrónico no puede estar vacío.");
    } else if (!email.includes("@")) {
        errores.push("El correo electrónico debe contener '@'.");
    }

    if (email !== confirmEmail) {
        errores.push("Los correos electrónicos no coinciden.");
    }

    if (password.length < 5) {
        errores.push("La contraseña debe tener al menos 5 caracteres.");
    }

    if (password !== confirmPassword) {
        errores.push("Las contraseñas no coinciden.");
    }

    if (errores.length > 0) {
        // Mostrar errores en el div
        errorDiv.innerHTML = errores.map(e => `<p>${e}</p>`).join("");
        return false; // Evitar el submit
    }

    // Si no hay errores, enviar formulario (o redirigir)
    // window.location.href para redirigir, cambiar el return a True para dejar que el formulario se envíe.
    // Por ahora, queremos redirigir a home.html:
    window.location.href = "home.html";
    return false; // Para que no se haga el submit real (Aún)
}

// Seccion Banner Homme
// Redirección de botones Login y Registro Home
document.getElementById('btn-login')?.addEventListener('click', function() {
    // Redirige a login.html
    window.location.href = 'login.html';
});
document.getElementById('btn-registro')?.addEventListener('click', function() {
    // Redirige a register.html
    window.location.href = 'register.html';
});

// fin redirección botones Login y registro Home

// Inicio imagenes banner

// Ejemplo para redirección con JS (solo si usas <button>)
// document.getElementById('banner-catalogo').addEventListener('click', function() {
//     window.location.href = 'products.html';
// });
// document.getElementById('banner-blogs').addEventListener('click', function() {
//     window.location.href = 'blogs.html';
// });
// document.getElementById('banner-pendiente').addEventListener('click', function() {
//     window.location.href = 'URL_PENDIENTE';
// });

// Comentario: Si usas <a href="..."> no necesitas JS para redirección


// Fin seccion Banner Homme

//funcion para el carrito de compras
