
let col_items_li;
let col_items_ul;
let col_items_anchor_remove;
let col_items_anchor_cheked;
let b_buttons;
let i_inputs;
let new_item;

const class_item_cheked = "list__item--checked";

let itemAdded = (new_item) => {
    console.log("itemAdded....");

    let col_ItemAdd = [];
    [...col_items_li].forEach(element => {
        str = element.textContent;
        // console.log(str.toLowerCase().includes(new_item.toLowerCase()));
        str = str.slice(0, -1).slice(1);
        col_ItemAdd.push(str.toLowerCase());
    });

    return col_ItemAdd.indexOf(new_item.toLowerCase());

}



let addItem = () => {
    console.log("addItem....");



    new_item = i_inputs.item(0).value;

    if (new_item != "") {
   
        if (itemAdded(new_item) === -1) {

            txtHTML = '<li class="list__item"><a class="list__delete-btn">X</a>' + new_item + '<a class="list__check-btn">✔</a></li>';
            col_items_ul.item(col_items_ul.length - 1).insertAdjacentHTML("beforeend", txtHTML);

            updateAnchorRemoveListener();
            updateAnchorChekedListener();
           
        }
        i_inputs.item(0).value = ""

    }
    i_inputs.item(0).focus();
}

let removeItem = (even) => {
    console.log("removeItem....");

    even.currentTarget.parentNode.remove();
    i_inputs.item(0).focus();

}

let checkedItem = (even) => {
    console.log("checkedItem....");

    let parent_li_anchor = even.currentTarget.parentNode;
    if (parent_li_anchor.classList.contains(class_item_cheked)) {
        parent_li_anchor.classList.remove(class_item_cheked);
    } else {
        parent_li_anchor.classList.add(class_item_cheked);
    }


    i_inputs.item(0).focus();


}

let updateAnchorRemoveListener = () => {
    col_items_anchor_remove = document.getElementsByClassName("list__delete-btn");
    [...col_items_anchor_remove].forEach(element => {
        element.addEventListener("click", removeItem);
    });
}

let updateAnchorChekedListener = () => {
    col_items_anchor_cheked = document.getElementsByClassName("list__check-btn");
    [...col_items_anchor_cheked].forEach(element => {
        element.addEventListener("click", checkedItem);
    });
}

let init = () => {
    console.log("Iniciarlizar....");
    col_items_li = document.getElementsByClassName("list__item");
    col_items_ul = document.getElementsByClassName("list");
    i_inputs = document.getElementsByTagName("input");
    i_inputs.item(0).focus();

    b_buttons = document.getElementsByTagName("button");
    b_buttons.item(0).addEventListener("click", addItem, false);

    updateAnchorRemoveListener();

    updateAnchorChekedListener();

}


window.onload = init;