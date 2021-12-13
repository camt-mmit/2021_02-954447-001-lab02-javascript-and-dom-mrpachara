import { create as createInputSum } from './input-sum.js';

function generateContainer(parentContainer) {
    const sectionContainers = parentContainer.querySelectorAll('.cmp-sections-container .cmp-section-container');
    sectionContainers.forEach((sectionContainer, i) => {
        sectionContainer.querySelector('.cmp-section-no').textContent = i + 1;
        sectionContainer.querySelector('.cmd-delete-section').disabled = false;
    });

    if(sectionContainers.length === 1) {
        parentContainer.querySelector('.cmp-sections-container .cmd-delete-section').disabled = true;
    }
}

function add(parentContainer) {
    const tmpSection = document.querySelector('template#tmp-section');
    const fragment = tmpSection.content.cloneNode(true);

    createInputSum(fragment.querySelector('.cmp-section-container'));

    parentContainer.querySelector('.cmp-sections-container').append(fragment);

    generateContainer(parentContainer);
}

function remove(container, parentContainer) {
    container.remove();

    generateContainer(parentContainer);
}

export function create(parentContainer) {
    parentContainer.addEventListener('click', (ev) => {
        const elem = ev.target;

        if(elem.matches('.cmd-add-section')) {
            add(parentContainer);
        } else if(elem.matches('.cmd-delete-section')) {
            const container = elem.closest('.cmp-section-container');

            remove(container, parentContainer);
        }
    });

    add(parentContainer);
}
