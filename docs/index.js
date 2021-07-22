let ingrediente, ingrediente_lista, lista, btn_check, btn_remove, ingrediente_input;

let itemAdded = (new_item) => {
    let col_ItemAdd = [];
    [...ingrediente_lista].forEach(element => {
        str = element.textContent;
        str = str.slice(0, -1).slice(1);
        col_ItemAdd.push(str.toLowerCase());
    });

    return col_ItemAdd.indexOf(new_item.toLowerCase());
}

let addItem = () => {
    ingrediente = document.querySelector("input");
    if (ingrediente.value.trimEnd().length >= 0) {
        txtHTML = '<li class="list__item"><a class="list__delete-btn">X</a>' + ingrediente.value.trimEnd() + '<a class="list__check-btn">✔</a></li>';
        lista.item(lista.length - 1).insertAdjacentHTML("beforeend", txtHTML);
        ingrediente_input.item(ingrediente.value.trimEnd()).value = ""
        checkedListener();
        removeListener();
    }
}

let checkedItem = (e) => {
    e.path[1].classList.toggle("list__item--checked");
}

let checkedListener = () => {
    btn_check = document.getElementsByClassName("list__check-btn");
    [...btn_check].forEach(element => {
        element.addEventListener("click", checkedItem);
    });
}

let removeItem = (e) => {
    e.path[1].remove();
}

let removeListener = () => {
    btn_remove = document.getElementsByClassName("list__delete-btn");
    [...btn_remove].forEach(element => {
        element.addEventListener("click", removeItem);
    });
}


let init = () => {
    ingrediente_lista = document.getElementsByClassName("list__item");
    lista = document.getElementsByClassName("list");
    ingrediente_input = document.getElementsByTagName("input");
    ingrediente_input.item(0).focus();
    add_btn = document.getElementsByTagName("button");
    add_btn.item(0).addEventListener("click", addItem, false);
    checkedListener();
    removeListener();

}
window.onload = init;