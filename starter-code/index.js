window.addEventListener('load', () => {

    const input = document.querySelector('input');
    const button = document.addEventListener('click', addItem);
    const lista = document.querySelector('.list');
    //const button = document.querySelector("button").addEventListener("click", addItem);

});

let addItem = () => {

    //let currentItem = document.getElementsByTagName('input');

    let newItem;
    let input = document.querySelector('input');
    if (input.value.length > 0) {
        newItem = (input.value);
        input.value = '';
    }


    let listItem = document.createElement('li');
    let checkItem = document.createElement('a');
    let text = document.createTextNode(nombreItem);
    let deleteItem = document.createElement('a');

    listItem.classList.add('.list__item');
    deleteItem.classList.add('.list__delete-btn');
    checkItem.classList.add('.list__check-btn');

    listItem.appendChild(checkItem);
    listItem.appendChild(deleteItem);

    let text = document.createTextNode(newItem);
    listItem.appendChild(text);

    deleteItem.innerText = 'x';
    checkItem.innerText = '✔';

    listItem.appendChild('.list');

};
//checkItem.addEventListener('click', checkedItem);
//document.querySelector("ul").appendChild(item);

let removeItem = (deleteItem) => {
    deleteItem.currentTarget.parentNode.remove();
    input.item(0).focus();
    deleteItem.addEventListener('click', removeItem);
};

let checkedItem = (checkItem) => {
    let parent_li_anchor = checkItem.currentTarget.parentNode;
    if (parent_li_anchor.classList.contains(class_item_cheked)) {
        parent_li_anchor.classList.remove(class_item_cheked);
    } else {
        parent_li_anchor.classList.add(class_item_cheked);
    }


    i_inputs.item(0).focus();


};

//window.onload = init();