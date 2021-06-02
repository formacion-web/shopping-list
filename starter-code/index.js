window.addEventListener('load', () => {

    //newItem("Milk");

    let button = document.addEventListener('click', addItem);
    let input = document.querySelector('input');
    let lista = document.querySelector('.list');
    //let input = document.querySelector('button').addEventListener('click', addItem);
    //button.querySelector("button");

});

let addItem = () => {

    //let currentItem = document.getElementsByTagName('input');
    //let newItem;
    let input = document.querySelector('input');
    if (input.value.length > 0) {
        newItem = (input.value);
        input.value = '';
    }
};
let newItem = (item) => {

    let listItem = document.createElement('li');
    let checkItem = document.createElement('a');
    let text = document.createTextNode(item);
    let deleteItem = document.createElement('a');

    listItem.appendChild(checkItem);
    listItem.appendChild(text);
    listItem.appendChild(deleteItem);

    deleteItem.innerText = 'x';
    checkItem.innerText = '✔';

    listItem.classList.add('.list__item');
    deleteItem.classList.add('.list__delete-btn');
    checkItem.classList.add('.list__check-btn');
    document.querySelector('ul').appendChild(listItem);

};



let removeItem = (deleteItem) => {
    //deleteItem.currentTarget.parentNode.remove();
    input.item(0).focus();
    deleteItem.addEventListener('click', removeItem);
};

let checkedItem = (checkItem) => {
    //checkItem.currentTarget.parentNode.add();
    /*let parent_li_anchor = checkItem.currentTarget.parentNode;
    if (parent_li_anchor.classList.contains(class_item_cheked)) {
        parent_li_anchor.classList.remove(class_item_cheked);
    } else {
        parent_li_anchor.classList.add(class_item_cheked);
    }*/

    input.item(0).focus();
    checkItem.addEventListener('click', checkedItem);



};

window.onload = init; // Parece que sin esta linea no se puede debugar con el inspector del navegador.