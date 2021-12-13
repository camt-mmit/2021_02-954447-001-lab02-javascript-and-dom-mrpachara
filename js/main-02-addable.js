document.addEventListener('DOMContentLoaded', () => {
    const addInput = (parent) => {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('cmp-input-container');

        const label = document.createElement('label');

        const labelMessage = document.createElement('b');
        labelMessage.textContent = 'Number:';

        const input = document.createElement('input');
        input.type = 'number';
        input.defaultValue = '0';
        input.required = true;

        label.append(labelMessage);
        label.append(input);

        inputContainer.append(label);

        parent.append(inputContainer);

        input.addEventListener('change', () => {
            const inputs = document.querySelectorAll('.cmp-inputs-container input[type="number"]');

            let total = 0;
            inputs.forEach((elem) => total += elem.valueAsNumber);
            document.querySelector('output.cmp-result').value = total;
        });
    };

    const inputsContainer = document.querySelector('.cmp-inputs-container');
    const cmdAddInput = document.querySelector('.cmd-add-input');
    cmdAddInput.addEventListener('click', () => {
        addInput(inputsContainer);
    });

    addInput(inputsContainer);
});
