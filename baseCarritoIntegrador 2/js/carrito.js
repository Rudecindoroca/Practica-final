let recupero = localStorage.getItem('carrito');
console.log(recupero)

//creo un mensaje para mas adetlante por si esta vacio el carrito y captuero la section donde vna a ir los productos (si es que hay en el Ls)
let mensaje = "Tu carrirto esta vacio"
let lista = document.querySelector('.lista')
let elementosCarrito = ""

if (recupero == null){
    let empty = document.querySelector('.empty')
    empty.innerHTML = mensaje


} else  {
    carrito = [];
    carrito = JSON.parse(recupero)
    for (i=0; i < carrito.length; i++){
        const id = carrito[i];
        const url = `https://rickandmortyapi.com/api/character/${id}`

        fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
           
            console.log(data);
            elementosCarrito += `<div class ="productov">
                                    <img src=${data.image} alt='${data.title}'>
                                    <p>Nombre : ${data.title}</p>
                                    <p>Price: $${data.price}</p>
                
                                </div>`;

                                lista.innerHTML = elementosCarrito;

        })
        .catch(function(e){
            console.log(e);
        })
       
    }

}
