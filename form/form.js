const formContainer = document.querySelector('.formulario');
const btnToggle = document.querySelectorAll('.toggle-form');


function toggleForm() {
    formContainer.classList.toggle('form-toggle');
}

btnToggle.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleForm()
    });
});

// 1. Seleção dos Elementos
const formLogin = document.querySelector('.form-login');
const formRegister = document.querySelector('.form-register');

const loginUser = document.getElementById('login-user');
const loginPass = document.getElementById('login-pass');
const loginUserError = document.getElementById('loginUser-error');
const loginPassError = document.getElementById('loginPass-error');

const registerUser = document.getElementById('register-user');
const registerEmail = document.getElementById('register-email');
const registerPass = document.getElementById('register-pass');
const registerPassError = document.getElementById('registerPass-error');
const registerUserError = document.getElementById('registerUser-error');
const registerEmailError = document.getElementById('registerEmail-error');

// 2. Função de Validação
function validateForm(event, isLogin) {
    event.preventDefault(); // Previne o envio do formulário

    if (isLogin) {
        let valid = true;

        // Validação do campo de usuário
        if (loginUser.value.trim() === '' || loginUser.value.length < 5) {
            loginUser.style.borderBottom = '2px solid red';
            loginUserError.textContent = 'Por favor adicione pelo menos 5 caracteres.';
            valid = false;
        } else {
            loginUser.style.borderBottom = '';
            loginUserError.textContent = '';
        }

        // Validação do campo de senha
        if (loginPass.value.trim() === '' || loginPass.value.length < 6) {
            loginPass.style.borderBottom = '2px solid red';
            loginPassError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            valid = false;
        } else {
            loginPass.style.borderBottom = '';
            loginPassError.textContent = '';
        }

        if (valid) {
            // Aqui você pode adicionar a lógica para enviar os dados do login
            console.log('Formulário de login válido. Enviando dados...');
        }
    } else {
        let valid = true;

        // Validação do campo de usuário
        if (registerUser.value.trim() === '' || registerUser.value.length < 5) {
            registerUser.style.borderBottom = '2px solid red';
            registerUserError.textContent = 'Por favor adicione pelo menos 5 caracteres.';
            valid = false;
        } else {
            registerUser.style.borderBottom = '';
            registerUserError.textContent = '';
        }

        // Validação do campo de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(registerEmail.value.trim())) {
            registerEmail.style.borderBottom = '2px solid red';
            registerEmailError.textContent = 'Por favor insira um email válido.';
            valid = false;
        } else {
            registerEmail.style.borderBottom = '';
            registerEmailError.textContent = '';
        }

        // Validação do campo de senha
        if (registerPass.value.trim() === '' || registerPass.value.length < 6) {
            registerPass.style.borderBottom = '2px solid red';
            registerPassError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            valid = false;
        } else {
            registerPass.style.borderBottom = '';
            registerPassError.textContent = '';
        }

        if (valid) {
            // Aqui você pode adicionar a lógica para enviar os dados do registro
            console.log('Formulário de registro válido. Enviando dados...');
        }
    }
}

// 3. Adicionando Event Listeners
formLogin.addEventListener('submit', (event) => validateForm(event, true));
formRegister.addEventListener('submit', (event) => validateForm(event, false));

