const formContainer = document.querySelector('.formulario');
const btnToggle = document.querySelectorAll('.toggle-form');


function toggleForm() {
    formContainer.classList.toggle('form-toggle');
}

btnToggle.forEach(btn => {
    console.log("toggle chamado");
    btn.addEventListener('click', () => {
        console.log("clique chamado");
        toggleForm()
    });
});