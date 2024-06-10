function checkPassword() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "SETA") {
        message.innerHTML = '<img src="jail_open.png" alt="Jail Opening">';
    } else {
        message.textContent = "Contraseña incorrecta. Intenta de nuevo.";
        message.style.color = "red";
    }
}
