document.getElementById('validateButton').addEventListener('click', function() {
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var fixedImage = document.getElementById('fixedImage');
    var liberacionImage = document.getElementById('liberacionImage');

    if (password === 'SETA') {
        errorMessage.style.display = 'none';
        fixedImage.style.display = 'none';
        liberacionImage.style.display = 'block';
    } else {
        errorMessage.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
        errorMessage.style.display = 'block';
        fixedImage.style.display = 'block';
        liberacionImage.style.display = 'none';
    }
});
