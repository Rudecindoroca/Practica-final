function getqueryparam(param) {
    let urlparams = new URLSearchParams(window.location.search);
    return urlparams.get(param);
}


let characterID = getqueryparam('id');

if (characterID){
    let url = `https://rickandmortyapi.com/api/character/${characterID}`;


    fetch(url)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
            console.log(data);
            let personaje = data.results;

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