document.querySelector(".contact-form").addEventListener("submit", function(event) {
    // Obtener referencias a los elementos del formulario y mensajes de error
    let fullNameInput = document.getElementById('fullName');
    let emailInput = document.getElementById('email');
    let phoneInput = document.getElementById('phone');
    let passwordInput = document.getElementById('password');
    let rePasswordInput = document.getElementById('rePassword');

    let invalidFullName = document.querySelector('.invalid-feedback.fullName');
    let invalidEmail = document.querySelector('.invalid-feedback.email');
    let invalidPhone = document.querySelector('.invalid-feedback.phone');
    let invalidPassword = document.querySelector('.invalid-feedback.password');
    let invalidRePassword = document.querySelector('.invalid-feedback.rePassword');

    // Limpiar mensajes de error anteriores
    invalidFullName.textContent = "";
    invalidEmail.textContent = "";
    invalidPhone.textContent = "";
    invalidPassword.textContent = "";
    invalidRePassword.textContent = "";

    // Validar cada campo
    let valid = true;

    if (fullNameInput.value === "") {
        invalidFullName.textContent = "Ingrese un valor";
        invalidFullName.style.display = "block";
        valid = false;
    }
    if (emailInput.value === "") {
        invalidEmail.textContent = "Ingrese un valor";
        invalidEmail.style.display = "block";
        valid = false;
    }
    if (phoneInput.value === "") {
        invalidPhone.textContent = "Ingrese un valor";
        invalidPhone.style.display = "block";
        valid = false;
    }
    if (passwordInput.value === "") {
        invalidPassword.textContent = "Ingrese un valor";
        invalidPassword.style.display = "block";
        valid = false;
    }
    if (rePasswordInput.value === "") {
        invalidRePassword.textContent = "Ingrese un valor";
        invalidRePassword.style.display = "block";
        valid = false;
    }

    // Detener el envío del formulario si no es válido
    if (!valid) {
        event.preventDefault();
    } else {
        alert("Formulario enviado correctamente");
    }
});