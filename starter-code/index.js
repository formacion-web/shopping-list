//ADD ITEM
window.addEventListener('load', () => {
    const input = document.querySelector('input');
    const button = document.addEventListener('click', addItem);
});


let addItem = () => {
    let input = document.querySelector('input'),
        if (value.length = 0) {
            newItem(input.value);
        }
};
newItem(nameItem) => {
    let checkItem = document.createElement('a');
    let deleteItem = document.createElement('a');
    let text = document.createTextNode(newItem);
    let item = document.createElement('li');
    item.appendChild(text);
    item.appendChild(checkItem);
    item.appendChild(deleteItem);

    deleteItem.addEventListener('click', removeItem);
    checkItem.addEventListener('click', checkedItem);

    deleteItem.innerText = 'x';
    checkItem.innerText = '✔';

    item.classList.add("list__item");
    deleteItem.classList.add("list__delete-btn");
    checkItem.classList.add("list__check-btn");
    document.querySelector("ul").appendChild(item);


}


//LIST ITEMS 
const listItems = document.getElementsByClassName('.list');

button.addEventListener('click', () => {
    let list = document.querySelector('.list__item');

    let li = document.createElement('li');
    li.textContent = input.value;
    let appendedItem = list.appendChild(li);

    for (let i = 0; i < appendedItem.length; i++) {
        appendedItem[i].style.color = lastPickedColor;
    }
    input.value = '';
});