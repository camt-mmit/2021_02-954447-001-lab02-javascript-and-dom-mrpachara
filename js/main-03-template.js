document.addEventListener('DOMContentLoaded', () => {
    const addInput = (parent) => {
        const tmpInput = document.querySelector('template#tmp-input');
        const fragment = tmpInput.content.cloneNode(true);

        fragment.querySelector('input[type="number"]').addEventListener('change', () => {
            const inputs = parent.querySelectorAll('input[type="number"]');

            let total = 0;
            inputs.forEach((elem) => total += elem.valueAsNumber);
            document.querySelector('output.cmp-result').value = total;
        });

        parent.append(fragment);

        parent.querySelectorAll('.cmp-input-container').forEach((inputContainer, i) => {
            inputContainer.querySelector('.cmp-input-no').textContent = i + 1;
        });
    };

    const inputsContainer = document.querySelector('.cmp-inputs-container');
    const cmdAddInput = document.querySelector('.cmd-add-input');
    cmdAddInput.addEventListener('click', () => {
        addInput(inputsContainer);
    });

    addInput(inputsContainer);
});
