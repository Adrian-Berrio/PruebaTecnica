// initilizing
const createBtn = document.querySelector('.create-btn');
const listContainer = document.querySelector('.list');
const historialContainer = document.querySelector('.historial-list');
const windowsCreate = document.getElementById('window-create');
const windowsCreateCloseBtn = document.getElementById('closeBtn');
const windowsCreateForm = document.getElementById('windowCreateForm');



// Event listeners
createBtn.addEventListener('click', () => {

    windowsCreate.style.display = 'block';

});

windowsCreateCloseBtn.addEventListener('click', () => {
    windowsCreate.style.display = 'none';
})

windowsCreateForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Recuperar los datos del formulario
    const formData = {
        presupuesto: document.getElementById('presupuesto').value,
        unidad: document.getElementById('unidad').value,
        tipo: document.getElementById('tipo').value,
        cantidad: document.getElementById('cantidad').value,
        valor: document.getElementById('valor').value,
        fecha: document.getElementById('fecha').value,
        proveedor: document.getElementById('proveedor').value,
        documentacion: document.getElementById('documentacion').value,
    };

    addElementToList("Unidad: " + formData.unidad + " // Tipo: " + formData.tipo);
    historial(`Elemento creado: ${formData.unidad}`);
    windowsCreate.style.display = 'none';
    windowsCreateForm.reset();
})

// functions
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



