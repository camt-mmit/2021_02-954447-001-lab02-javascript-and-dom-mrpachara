function calculateSum (parentContainer) {
    const inputs = parentContainer.querySelectorAll('.cmp-inputs-container .cmp-input-container input[type="number"]');

    let total = 0;
    inputs.forEach((elem) => total += elem.valueAsNumber);
    parentContainer.querySelector('output.cmp-result').value = total;
};

function generateContainer(parentContainer) {
    const inputContainers = parentContainer.querySelectorAll('.cmp-inputs-container .cmp-input-container');
    inputContainers.forEach((inputContainer, i) => {
        inputContainer.querySelector('.cmp-input-no').textContent = i + 1;
        inputContainer.querySelector('.cmd-delete-input').disabled = false;
    });

    if(inputContainers.length === 1) {
        parentContainer.querySelector('.cmp-inputs-container .cmd-delete-input').disabled = true;
    }

    calculateSum(parentContainer);
};

function add(parentContainer) {
    const tmpInput = document.querySelector('template#tmp-input');
    const fragment = tmpInput.content.cloneNode(true);

    parentContainer.querySelector('.cmp-inputs-container').append(fragment);

   generateContainer(parentContainer);
};

function remove(container, parentContainer) {
    container.remove();

    generateContainer(parentContainer);
}

export function create(parentContainer) {
    parentContainer.addEventListener('click', (ev) => {
        const elem = ev.target;

        if(elem.matches('.cmd-add-input')) {
            add(parentContainer);
        } else if(elem.matches('.cmd-delete-input')) {
            const container = elem.closest('.cmp-input-container');

            remove(container, parentContainer);
        }
    });

    const inputsContainer = parentContainer.querySelector('.cmp-inputs-container');
    inputsContainer.addEventListener('change', (ev) => {
        const elem = ev.target;

        if(elem.matches('input[type="number"]')) {
            calculateSum(parentContainer);
        }
    });

    add(parentContainer);
}
