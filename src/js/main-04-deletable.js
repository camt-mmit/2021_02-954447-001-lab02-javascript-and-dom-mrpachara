document.addEventListener('DOMContentLoaded', () => {
    const generateInputCotainer = (parent) => {
        const inputContainers = parent.querySelectorAll('.cmp-inputs-container .cmp-input-container');
        inputContainers.forEach((inputContainer, i) => {
            inputContainer.querySelector('.cmp-input-no').textContent = i + 1;
            inputContainer.querySelector('.cmd-delete-input').disabled = false;
        });

        if(inputContainers.length == 1) {
            parent.querySelector('.cmp-inputs-container .cmd-delete-input').disabled = true;
        }
    };

    const calculateSum = (parent) => {
        const inputs = parent.querySelectorAll('.cmp-inputs-container .cmp-input-container input[type="number"]');

        let total = 0;
        inputs.forEach((elem) => total += elem.valueAsNumber);
        parent.querySelector('output.cmp-result').value = total;
    };

    const addInput = (parent) => {
        const tmpInput = document.querySelector('template#tmp-input');
        const fragment = tmpInput.content.cloneNode(true);

        parent.append(fragment);

       generateInputCotainer(parent);
    };

    const sectionContainer = document.querySelector('.cmp-section-container');
    const inputsContainer = sectionContainer.querySelector('.cmp-inputs-container');

    sectionContainer.addEventListener('click', (ev) => {
        const elem = ev.target;

        if(elem.matches('.cmd-add-input')) {
            addInput(inputsContainer);
        } else if(elem.matches('.cmd-delete-input')) {
            const elem = ev.target;
            const inputContainer = elem.closest('.cmp-input-container');

            inputContainer.remove();

            generateInputCotainer(sectionContainer);
            calculateSum(sectionContainer);
        }
    });

    inputsContainer.addEventListener('change', (ev) => {
        const elem = ev.target;

        if(elem.matches('input[type="number"]')) {
            calculateSum(sectionContainer);
        }
    });

    addInput(inputsContainer);
});
