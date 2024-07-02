let container = document.querySelector('.search-results');
document.getElementById('searchForm').addEventListener('submit', function(event) { 

    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('q');

    if (!searchTerm){
        console.log('No search term provided');


    }  else {
        // Construir la URL de la API de Rick and Morty
        const url = `https://rickandmortyapi.com/api/character/?name=${searchTerm.q}`;

        // Hacer la solicitud fetch a la API
        fetch(url)
                .then(function(res){
                    return res.json()
                })
                .then(function(data){
                    
                    console.log(data);

                    let nombre = document.querySelector('.nombre');
                    let imagen = document.querySelector('.imagen');
                    let status = document.querySelector('.status');
                    let especie = document.querySelector('.especie');

                    imagen.src = data.image
                    nombre.innerText = data.name;
                    status.innerText = data.status;
                    especie.innerText = data.species;


                    
                    })



            }
})
