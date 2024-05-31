document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

document.getElementById('sameAddress').addEventListener('change', function() {
    let correspondenceSection = document.getElementById('correspondenceAddressSection');
    if (this.checked) {
        correspondenceSection.classList.add('hidden');
        document.getElementById('correspondenceAddress').required = false;
    } else {
        correspondenceSection.classList.remove('hidden');
        document.getElementById('correspondenceAddress').required = true;
    }
});

document.getElementById('country').addEventListener('change', function() {
    let voivodeshipSelect = document.getElementById('voivodeshipSelect');
    let voivodeshipText = document.getElementById('voivodeshipText');
    let voivodeshipLabel = document.getElementById('voivodeshipLabel');

    if (this.value.toLowerCase() === 'polska') {
        voivodeshipLabel.classList.remove('hidden');
        voivodeshipSelect.classList.remove('hidden');
        voivodeshipText.classList.add('hidden');
        voivodeshipSelect.required = true;
        voivodeshipText.required = false;
    } else {
        voivodeshipLabel.classList.remove('hidden');
        voivodeshipSelect.classList.add('hidden');
        voivodeshipText.classList.remove('hidden');
        voivodeshipSelect.required = false;
        voivodeshipText.required = true;
    }
});

function validateForm() {
    let form = document.getElementById('registrationForm');
    let firstName = form.firstName;
    let lastName = form.lastName;
    let email = form.email;
    let password = form.password;
    let confirmPassword = form.confirmPassword;
    let gender = form.gender;
    let phone = form.phone;
    let dob = form.dob;
    let country = form.country;
    let voivodeship = form.voivodeship;
    let address = form.address;
    let correspondenceAddress = form.correspondenceAddress;
    let sameAddress = form.sameAddress.checked;

    clearValidationErrors();

    let isValid = true;

    if (!hasValue(firstName)) {
        showError(firstName, 'Pole Imię jest wymagane.');
        isValid = false;
    }

    if (!hasValue(lastName)) {
        showError(lastName, 'Pole Nazwisko jest wymagane.');
        isValid = false;
    }

    if (!isValidEmail(email.value)) {
        showError(email, 'Podaj poprawny adres email.');
        isValid = false;
    }

    if (!hasValue(password)) {
        showError(password, 'Pole Hasło jest wymagane.');
        isValid = false;
    } else if (password.value.length < 8) {
        showError(password, 'Hasło musi mieć co najmniej 8 znaków.');
        isValid = false;
    }

    if (!hasValue(confirmPassword)) {
        showError(confirmPassword, 'Pole Potwierdź hasło jest wymagane.');
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, 'Hasła nie są identyczne.');
        isValid = false;
    }

    if (!hasValue(gender)) {
        showError(gender, 'Wybierz płeć.');
        isValid = false;
    }

    if (!isValidPhoneNumber(phone)) {
        showError(phone, 'Podaj poprawny numer telefonu.');
        isValid = false;
    }

    if (!isValidDateOfBirth(dob.value)) {
        showError(dob, 'Musisz być pełnoletni, aby się zarejestrować.');
        isValid = false;
    }

    if (!hasValue(country)) {
        showError(country, 'Pole Kraj jest wymagane.');
        isValid = false;
    }

    if (country.value.toLowerCase() === 'polska' && !hasValue(voivodeship)) {
        showError(voivodeship, 'Wybierz województwo.');
        isValid = false;
    } else if (country.value.toLowerCase() !== 'polska' && !hasValue(voivodeship)) {
        showError(voivodeship, 'Pole Województwo jest wymagane.');
        isValid = false;
    }

    if (sameAddress) {
        correspondenceAddress.value = address.value;
    }

    if (!sameAddress && !hasValue(correspondenceAddress)) {
        showError(correspondenceAddress, 'Pole Adres korespondencyjny jest wymagane.');
        isValid = false;
    }

    if (isValid) {
        alert('Formularz został pomyślnie zwalidowany!');
    }
}

function hasValue(input) {
    return input.value.trim() !== '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(phone.value.replace(/\D/g, ''));
}

function isValidDateOfBirth(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 18;
    }

    return age >= 18;
}

function showError(input, message) {
    input.classList.add('error');
    let errorMessage = input.parentElement.querySelector('.error-message');
    errorMessage.innerText = message;
}

function clearValidationErrors() {
    let errorInputs = document.querySelectorAll('.error');
    errorInputs.forEach(function(input) {
        input.classList.remove('error');
    });

    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.innerText = '';
    });
}
