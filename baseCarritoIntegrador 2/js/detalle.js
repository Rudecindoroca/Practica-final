//Pasos para QS
let qs = location.search; //Obtener la qs de la url
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get('id'); //Obtener el dato de id del objeto literal

//Armar un nuevo fetch
let url = `https://rickandmortyapi.com/api/character/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);

        //Paso 1: capturar DOM.
        let title = document.querySelector('h1');
        let image = document.querySelector('img');
        let status = document.querySelector('.status');
        let especie = document.querySelector('.especie');

        //Paso 2 y 3: actualizar datos y actualizar DOM;
        title.innerText = data.name;
        image.src=data.image;
        status.innerText += data.status;
        especie.innerText += data.species;      

    })
    .catch(function(error){
        console.log(error);
    })


//primero creo un array vacio para ir completando con los datos 
    let carrito = []

    let fav = document.querySelector('.fav')

//despues me fijo si hay algo en el local storage
    let recuperoStorage = localStorage.getItem('carrito');

if (recuperoStorage != null) {
    //hago parse para convertirlo en on objeto jason
    let recuParse = JSON.parse(recuperoStorage)
    carrito = recuParse
}

// Agregamos un event listener para el evento 'click' en el botón de agregar al carrito
fav.addEventListener(`click`, function(e) {
    // evitamos el comportamiento predeterminado del evento 
        e.preventDefault()
    
    //agrefgamos un producto al array "carrito" y convertimos ese array a una cadena JSON 
        carrito.push(id)
        let carritoString = JSON.stringify(carrito)
    
    //guardamos la cadena JSON en el LocalStorage 
        localStorage.setItem('carrito', carritoString)
      
    
        alert('Producto agregado al carrito')
        console.log("carrito:", carrito)
        console.log("localstorage: ", localStorage)
    
    })
    


    