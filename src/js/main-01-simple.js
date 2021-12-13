document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.cmp-inputs-container input[type="number"]');
    inputs.forEach((elem) => {
        elem.addEventListener('change', () => {
            let total = 0;
            inputs.forEach((elem) => total += elem.valueAsNumber);
            document.querySelector('output.cmp-result').value = total;
        });
    });
});
