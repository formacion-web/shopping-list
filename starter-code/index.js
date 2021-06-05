window.addEventListener("load", function(init) {
    console.log("'Todos los recursos terminaron de cargar!");
  });

  const listUl = document.querySelector('.list');

const generateTemplate = empty =>{

  const html = `
  <li class="list__item"><a class="list__delete-btn">X</a>${empty}<a class="list__check-btn">✔</a></li>
  `;
 listUl.innerHTML += html;

};


let addItem = document.querySelector('button');

let addInput = document.querySelector('#inpuText');
console.log(addInput);
addItem.addEventListener('click', e=>{
    e.preventDefault();
let empty = addInput.value.trim();

if(empty.length){
  generateTemplate(empty);

document.querySelector('#inpuText').value = '';
 }

});

//delete listUL and checked

listUl.addEventListener('click', e=>{
  
  if(e.target.classList.contains('list__delete-btn')){
    e.target.parentElement.remove();
  }
  if(e.target.classList.contains('list__check-btn')){
    e.target.parentElement.classList.add(('list__item--checked'));
  }



});

//focus input


function getFocus (){
  document.getElementById('inpuText').focus();
}


