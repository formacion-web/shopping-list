class Item {
    static items = [];//array objetos de nombres

    constructor(name) {
        this.name = name;
    }

    /*   static get getArrayItems() {
          return Item.items =[];
      } 
  
      static set setArrayItems(valor){
          Item.items.push(valor);
      } */

    addItem(item) {
        Item.items.push(item);
    }

    static removeItem(product) {//parametro string
        //retorna el objeto si lo encuentro sino undefined
        let findItem = Item.items.find(item => item.name === product);
        if (findItem instanceof Item) { //si el objeto es una instancia de su clase (si existe)
            //eliminar el objeto del array con el indice proporcionado por el nombre del item
            Item.items.splice( Item.items.map((e) => e.name).indexOf(findItem.name), 1); 
        }

    }
}

let argsCreateElement;//objeto de atributos para la creacion de un elemento

///METODOS

//añade un item a la lista
const addItemToShoppingList = () => {
    let input;
    document.querySelector(".add-item").addEventListener('click', () => {
        input = document.querySelector("input[name='add']");
        if (is_emptyInput(input)) {//el campo input no esta vacio
            let objItem = new Item(input.value.trim().toLowerCase());
            if (!is_existItem(objItem)) {//no existe
                input.value = '';
                //añade el item al array
                objItem.addItem(objItem);
                
                argsCreateElement = { tag: "li", nameClass: "list__item", content: objItem.name };
                let li = elementDirectChild(createElement(argsCreateElement), ".list");
                createElementsDirectsChilds(li, argsChilds());
                printMessageInput("add","span", "succes-input", "Has añadido un articulo.");
            } else {
                printMessageInput("repeat","span", "error-input", "Este articulo ya está en la lista.");
            }
        } else {
            printMessageInput("empty","span", "error-input", "Introduce un articulo para añadir.");
        }
        input.focus();
    })
}



//si ya esta añadido el objeto item 
const is_existItem = (obj) => {
    //el objeto item esta en el array de objetos
    let exist = Item.items.some(item => item.name === obj.name);
    if (exist) {// si lo encuentra
        return exist;//true
    }
    return exist;  //false
}

//Elimina el elemento visual del dom y del array de objetos
const itemDelete = (e) => {
    let objElement = e.currentTarget.parentNode;//el elemento en el cual se esta lanzando el evento click
    let textElement = objElement.textContent;
    Item.removeItem(textElement.substr(0, textElement.length - 2));//elimina el texto de los tags 'a'
    objElement.remove();
}

//añade o elimina  una class
const itemChecked = (e) => {
    if (e.currentTarget.parentNode.classList.contains('list__item--checked')) {
        e.currentTarget.parentNode.classList.remove('list__item--checked');
    } else {
        e.currentTarget.parentNode.classList.add('list__item--checked');
    }
}

//comprueba si el campo input esta lleno o vacio, modificando estilos
const is_emptyInput = (input) => {
    let empty = false;
    if (input.value.trim() !== "") {// campo lleno
        empty = true;
        input.style.backgroundColor = "white";
        input.style.border = "inherit";
        let err = document.querySelector(".error-input");
        if (err !== null) {
            err.remove();
        }
        return empty;
    } else {//campo vacio
        input.style.backgroundColor = "#ff997a";
        input.style.border = "1px solid red";
    }
    return empty;
}


//control de errores y success
//printa mensajes  informativos en el campo input
const printMessageInput = (status, element, name, text) => {
    argsCreateElement = { tag: element, nameClass: name, content: text }
    let newEle = '';
    switch (status) {
        case 'add':
            newEle = createElement(argsCreateElement);
            elementSibling(newEle, ".add-item");
            break;
        case 'empty':
            newEle = createElement(argsCreateElement);
            elementSibling(newEle, ".add-item");
            break;
        case 'repeat':
            newEle = createElement(argsCreateElement);
            elementSibling(newEle, ".add-item");
            break;
    }
}


const argsChilds = () => {
    return argsCreateEleChilds = {
        tag: "a",
        childs: [{
                class: "list__delete-btn",
                text: "X",
                click: itemDelete,
            },
            {
                class: "list__check-btn",
                text: "✔",
                click: itemChecked,
            }
        ]
    }
}

// FUNCIONES HELPERS

/**
 * Creacion de nuevo elemento, unicamente crea el elemento y retorna dicho objeto. Actua como funcion global.
 * @param {object} objElement - Recibe un objeto con los siguientes atributos:
 * @attr {string} tag - crea el nuevo elemento, introducir el nombre de la etiqueta a crear.
 * @attr {array} nameClass - Opcional: introducir una class al nuevo elemento
 * @attr {strung} content - Opcional: Introducir el contenido de texto que tendra el nuevo elemento
 */
const createElement = (objElement) => {
    let newElement = document.createElement(objElement.tag);
    if (objElement.nameClass !== '') {
        newElement.classList.add(objElement.nameClass);
    }
    if (objElement.content !== '') {
        let content = document.createTextNode(objElement.content);
        newElement.appendChild(content);
    }
    return newElement;

}


/**
 * Metodo que inserta X hijos al elemento padre
 * @param {object} selector - Recibe el (objeto) elemento padre del DOM, donde añadira sus hijos 
 * @param {object} objElement - Recibe un objeto con los siguientes atributos:
 * @attr {string} tag - crea el nuevo elemento, introducir el nombre de la etiqueta a crear.
 * @attr {array} childs - contiene un array de objetos  con los atributos que tendran su hijos
 * @attr {string} class - Opcional: Introduce el nombre de class que tendra los hijo/s
 * @attr {string} text - Opcional: Introduce el contenido de texto que tendra los hijo/s
 * @attr {event} event(click,focus...) - Opcional: la key del atributo introduce el tipo de event y su value el nombre de la funcion a ejecutar
 */
 const createElementsDirectsChilds = ( selector, objectChilds) => {
    if (selector !== null) {
        let arrayElement = [];
        for (let i = 0; i < objectChilds.childs.length; i++) {
            let newElementChild = document.createElement(objectChilds.tag);
            arrayElement.push(newElementChild);
            if (objectChilds.childs[i].class !== '') {
                arrayElement[i].classList.add(objectChilds.childs[i].class);
            }
            if (objectChilds.childs[i].text !== '') {
                let content = document.createTextNode(objectChilds.childs[i].text);
                arrayElement[i].appendChild(content);
            }
            if (objectChilds.childs[i].click !== '') {
                arrayElement[i].addEventListener(Object.keys(objectChilds.childs[i])[2], objectChilds.childs[i].click);
            }
            selector.appendChild(arrayElement[i]);
        }
    }
}


/**
 * Metodo que inserta un elemento hermano a continuacion del otro.
 * @param {object} createTag - Nuevo elemento html creado.
 * @param {string} selector - selector que sera hermano mayor/previous del nuevo elemento creado. Introducir tag o nombre de la .class/#id.
 */
 const elementSibling = (createTag, selector) => {
    let eleSibling = document.querySelector(selector);
    eleSibling.parentNode.insertBefore(createTag, eleSibling.nextSibling);
    return createTag;
}

/** Metodo que inserta un unico hijo al elemento padre.
 * @param {object} createTag - Nuevo elemento html creado.
 * @param {string} selector -  selector que sera padre del nuevo elemento creado. Introducir tag o nombre de la .class/#id.
 */
const elementDirectChild = (createTag, selector) => {
    let eleParent = document.querySelector(selector);
    eleParent.appendChild(createTag);
    return createTag;
}



const init = () => {
    const argsCreateElement1 = { tag: "li", nameClass: "list__item", content: "Meat" };
    const argsCreateElement2 = { tag: "li", nameClass: "list__item", content: "Eggs" };
    const argsCreateElement3 = { tag: "li", nameClass: "list__item", content: "Pizza"};
    createElementsDirectsChilds( elementDirectChild( createElement(argsCreateElement1), ".list"), argsChilds());
    createElementsDirectsChilds( elementDirectChild( createElement(argsCreateElement2), ".list"), argsChilds());
    createElementsDirectsChilds( elementDirectChild( createElement(argsCreateElement3), ".list"), argsChilds());
    addItemToShoppingList();
    
}


window.addEventListener("load", init);