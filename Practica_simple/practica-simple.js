let url = `https://rickandmortyapi.com/api/character`;

fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);

        let CharacterList1 = data.results;
        let Characters = [];
        let section = document.querySelector('.characterList');

        for (i=0; i< CharacterList1.length; i++){
            Characters += `<article class = "productov">
                                <img src=${CharacterList1[i].image}  alt='${CharacterList1[i].name}'/>
                                <p>Name: ${CharacterList1[i].name} </p>
                                <p>Status: ${CharacterList1[i].status}</p>
                            </article>`

        }


        section.innerHTML = Characters;


    })
    .catch ( function(e){
        console.log('Error: ' + e);
    })



    