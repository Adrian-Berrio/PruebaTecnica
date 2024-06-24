// button create
const createBtn = document.querySelector('.create-btn');
createBtn.addEventListener('click', () => {

    // lo que hará el boton crear
    addElementToList('gfdsf');
});


// list products or service
const listContainer = document.querySelector('.list');

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
}

addElementToList('Hola prueba');
addElementToList('prueba 2');

