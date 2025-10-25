function login() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const msg = document.getElementById('message');

    // Usuario y contraseña correctos
    const correctUser = "admin";
    const correctPass = "ADVIKakulaIESLAESTRELLA";

    if (user.toLowerCase() === correctUser.toLowerCase() && pass === correctPass) {
        msg.style.color = "green";
        msg.textContent = "Acceso concedido, redirigiendo...";
        setTimeout(() => {
            window.location.href = "web.html";
        }, 800);
    } else {
        msg.style.color = "red";
        msg.textContent = "Usuario o contraseña incorrectos.";
    }
}
