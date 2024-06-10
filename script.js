function checkPassword() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "SETA") {
        message.innerHTML = '<img src="jail.jpg" alt="Jail Opening">';
    } else {
        message.textContent = "Contraseña incorrecta. Intenta de nuevo.";
        message.style.color = "red";
    }
}
