// button create
const createBtn = document.querySelector('.create-btn');
createBtn.addEventListener('click', () => {
    const newItemText = prompt('Introduce el texto:');

    // do it button create
    addElementToList(newItemText);
    historial('se creó el elemento: ' + newItemText);
});


// list products or service
const listContainer = document.querySelector('.list');
const historialContainer = document.querySelector('.historial-list');


function historial(action) {
    const historialItem = document.createElement('div');
    historialItem.classList.add('historial-item');
    historialItem.textContent = action;
    historialContainer.appendChild(historialItem);
}


function addElementToList(texto) {
    const newElement = document.createElement('div');
    newElement.classList.add('list-item');

    newElement.innerHTML = `
        <span>${texto}</span>
        <div class="buttons">
            <button class="edit-btn"><img src="../images/modif.svg" alt="Edit"></button>
            <button class="desactivar-btn"><img src="../images/desactivar.svg" alt="delete"></button>
        </div>`;

        listContainer.appendChild(newElement);

        //TODO edit buttom
        const editBtn = newElement.querySelector('.edit-btn');
        editBtn.addEventListener('click', () => {
            const newText = prompt('Edita el texto:', texto);
        if (newText) {
            newElement.querySelector('span').textContent = newText;
        }

        historial('se editó:' + texto);
        texto = newText;

        });

        //TODO delete button
        const desactivarBtn = newElement.querySelector('.desactivar-btn');
        desactivarBtn.addEventListener('click', () => {
            listContainer.removeChild(newElement);
            historial ('se desactivó: ' + texto);
        });
}



