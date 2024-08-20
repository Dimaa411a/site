document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігає відправці форми

    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    
    const passwordMinLength = 8;
    const passwordRegex = /(?=.*[!@#$%^&*])/; // Перевірка на спеціальний символ

    // Перевірка мінімальної довжини пароля
    if (password.length < passwordMinLength) {
        alert('Password must contain at least 8 characters.');
        return;
    }

    // Перевірка наявності спеціального символу в паролі
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least one special character (!@#$%^&*).');
        return;
    }

    // Перевірка секретного коду
    if (password === "Dimaa411!") {
        alert("You have entered the secret phrase!");
        return; // Пропускає наступні перевірки
    }

    // Перевірка валідності email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Якщо всі перевірки пройдено
    alert('Form submitted successfully!');
});
