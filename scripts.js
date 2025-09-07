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
