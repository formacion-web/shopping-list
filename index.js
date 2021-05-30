

window.addEventListener("load",()=>{

    //crear elementos iniciales
    crearItem("Milk");
    crearItem("Eggs");
    crearItem("Bread");
    
    //assignar evento additem al boton
    let add =document.querySelector("button").addEventListener("click",addItem);

});


//#region Eventos
let addItem=()=>{
    let input =document.querySelector("input");
    crearItem(input.value);
    input.value="";
}

let removeItem=(e)=>{
    e.path[1].remove()
}

let chekedItem =(e)=>{
    e.path[1].classList.toggle("list__item--checked");
} 

//#endregion Eventos

//#region Funciones
function crearItem(nombreItem)
{
    //crear etiquetas
    let item = document.createElement("li");
    let deleteItem = document.createElement("a");
    let text = document.createTextNode(nombreItem);
    let checkItem = document.createElement("a");
    
    item.appendChild(deleteItem);
    item.appendChild(text);
    item.appendChild(checkItem);

    //asignar Eventos
    deleteItem.addEventListener("click",removeItem);
    checkItem.addEventListener("click",chekedItem);

    //añadir valores a las etiquetas
    deleteItem.innerText="X";
    checkItem.innerText="✔";

    //añadir style
    item.classList.add("list__item");
    deleteItem.classList.add("list__delete-btn");
    checkItem.classList.add("list__check-btn");
    document.querySelector("ul").appendChild(item);
    
}

//#endregion Funciones