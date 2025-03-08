document.addEventListener("DOMContentLoaded", () => {

    const inputs = document.querySelectorAll('input');
    const labels = document.querySelectorAll('label');
    const submit = document.getElementById('formSubmit');

    submit.addEventListener("click", (event) => {
        event.preventDefault();
    })

    inputs.forEach((input) => {
        input.addEventListener('focus', () => {
            const label = document.querySelector(`label[for="${input.id}"]`);
            label.style.color = '#00ffe6'; // Change color on focus
            label.style.fontWeight = "400";
            label.style.transition = "all 0.5s ease"
        });

        input.addEventListener('blur', () => {
            const label = document.querySelector(`label[for="${input.id}"]`);
            label.style.color = ''; // Reset color when focus is lost
            label.style.fontWeight = "100";
        });
    });

})
