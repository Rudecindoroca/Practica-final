let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists `

fetch(url)
   .then(function(res){
         return res.json()
   })
   .then(function(data){
            console.log(data)
            let arryDePlaylists= data.data;

            let seccion = document.getElementById('playlist');
            let allPlaylist = '';
            
            for(let i=0; i< arryDePlaylists.length ; i++){


                allPlaylist += `<article class="card-minimal">
                    <img src="${arryDePlaylists[i].picture_medium}"
                    alt="${arryDePlaylists[i].title}">
                <h4>${arryDePlaylists[i].title}</h4>
                <p class="card-text">${arryDePlaylists[i].user.name}</p>
                <a href="playlist.html?id=${arryDePlaylists[i].id}" class="btn btn-success">Ver más</a>
                 </article>`
            }
            

                seccion.innerHTML = allPlaylist;

                
   })
   .catch(function(error){
    console.error(error)
})






