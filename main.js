document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (this.checkValidity()) {
        document.getElementById('alert').style.display = 'block';
        this.reset();
    }
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

