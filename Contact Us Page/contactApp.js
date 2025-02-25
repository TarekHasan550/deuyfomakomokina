const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');

inputs.forEach((input) => {
    input.addEventListener('focus', () => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        label.style.color = '#00ffe6'; // Change color on focus
        label.style.fontWeight = "400";
    });

    input.addEventListener('blur', () => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        label.style.color = ''; // Reset color when focus is lost
        label.style.fontWeight = "100";
    });
});
