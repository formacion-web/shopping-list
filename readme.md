# LA LISTA DE LA COMPRA

## Intro

Construirás una lista de la compra que permitirá añadir productos a la lista usando un formulario y un botón. Cuando se añada un producto en la caja de texto y se clique el botón:
    - el producto debe aparecer en la lista.
    - cada producto debe tener un botón que al ser presionado debe borrar el producto de la lista.
    - la caja de texto debe quedar vacía y con el foco listo para entrar otro producto.

El resultado final debe ser algo similar a esto:
![imagen](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents/shopping-list.png)

## Instrucciones a seguir para entregar el ejercicio:

1. Realiza un fork del repositorio.
2. Clona __tu__ repositorio a tu máquina local.
3. Modifica los ficheros index.html y style.css que se facilitan en este mismo directorio.
4. Guarda los ficheros modificados:
    - `git add .`
    - `git commit -m 'examen'`
5. Sube los cambios al repositorio:
    - `git push`
6. Crea una github page de tu repositorio:
    - _Settings/github-page_
7. Genera un __pull request__ con tu nombre en la cabecera del mensaje y la url de la github page en la descripción.
8. Envía la url de la github page mediante el canal #ejercicios-evaluables de slack

## Iteraciones

Para completar el ejercicio sigue los pasos siguientes y asegúrate que la lista se comporta como se decribe arriba.

### Iteración 1

Asigna a un evento load del documento una función `init()` que prepare el escenario inicial:
- Cree tres variables que contengan referencia a los elementos lista (<ul>), <input>, y <button>.
- Asocie la función `addItem()` al evento click del botón.

### Iteración 2

Crea la función `addItem()` que se ejecute cuando se clique el botón.
La función debe realizar las siguientes acciones:
    - almacenar el valor actual del elemento input en una variable.
    - vaciar el elemento input pasando el valor string vacío.
    - crear tres nuevos elementos: un _list item_ (<li>) y dos <a> y almacenarlos en variables.
    - asociar las siguientes clases a los elementos creados:
      - "list__item" al elemento _list item_
      - "list__delete-btn" a uno de los elementos `a`
      - "list__check-btn" al otro elemento `a`
    - añadir los dos `a` como hijos del _list item_.
    - asignar al contenido de texto del _list item_ el valor del elemento input almacenado anteriormente.
    - asignar al primer anchor el texto `X`.
    - asignar al segundo anchor el texto `✔`.
    - añadir el _list item_ como hijo de la lista.
    - asociar una función `removeItem()` al anchor delete.
    - asociar una función `checkedItem() al anchor check.
    - enfocar al elemento input de manera que quede preparado para asignar un nuevo _list item_. Utiliza el método `focus()` para ello.

### Iteración 3

Crea la función `removeItem()` que elimine completamente el elemento list item.

### Iteración 4

Crea la función `checkedItem()` que asignará la clase `.list__item--checked ` al _list item_.

