const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const btnSend = document.getElementById('btn-form');

btnSend.addEventListener('click', function () {
    alert('Tu información ha sido enviada satisfactoriamente, te contactaremos pronto');
});
