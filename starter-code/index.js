let input;

window.addEventListener('load', () => {


    let button = document.querySelector("button");
    button.addEventListener('click', addItem);
    input = document.querySelector('input');
    let lista = document.querySelector('.list');
    input.focus();
    //input.item(0).focus();
    console.log('open...');

});

let addItem = () => {
    console.log('añadir item...');
    let newItem;
    input = document.querySelector('input');

    if (input.value.length > 0) {
        newItem = (input.value);
        input.value = '';
    } else {
        return false;
    }


    // crear elemento
    console.log('crear elemento...');

    let listItem = document.createElement('li');
    let checkItem = document.createElement('a');
    //let text = document.createTextNode(item);
    let deleteItem = document.createElement('a');

    // añadir contenido
    console.log('añadir contenido...');

    deleteItem.innerText = 'X'; // pintar icono delete
    checkItem.innerText = '✔'; // pintar icono checked
    listItem.textContent = newItem; // escribir el texto dentro de la caja

    listItem.classList.add('list__item');
    deleteItem.classList.add('list__delete-btn');
    checkItem.classList.add('list__check-btn');
    document.querySelector('ul').appendChild(listItem);

    checkItem.addEventListener('click', checkedItem);
    deleteItem.addEventListener('click', removeItem);


    listItem.appendChild(checkItem);
    listItem.appendChild(deleteItem);
    input.focus();

};

let removeItem = (e) => {
    //e.target.addEventListener('click', removeItem);
    e.currentTarget.parentNode.remove();
    //deleteItem.addEventListener('click', removeItem);
    console.log('eliminar item...');
    input.focus();
};


let checkedItem = (e) => {


    checkItem = e.currentTarget.parentNode;
    if (checkItem.classList.contains('list__item--checked')) {
        checkItem.classList.remove('list__item--checked');
    } else {
        checkItem.classList.add('list__item--checked');
    }

    input.focus();


    console.log('marcar item...');

};

window.onload = init; // Parece que sin esta linea no se puede debugar con el inspector del navegador.