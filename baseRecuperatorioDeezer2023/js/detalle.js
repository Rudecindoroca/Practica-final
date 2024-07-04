function getQueryParam(param){
    let urlparams = new URLSearchParams(window.location.search)
    return urlparams.get(param);

}


let PlaylistId = getQueryParam('id');

if (PlaylistId ){

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${PlaylistId}`
    fetch(url)
   .then(function(res){
         return res.json()
   })
   .then(function(data){
            console.log(data)
             let seccionNombre = document.querySelector(`.alert.alert-success.playlist-title`);
             let seccionImg = document.querySelector(`.artist-cover-medium`);
             let numeroDeTracks = document.querySelector(`.nb-tracks`);
             let username = document.querySelector(`.user-name`);

             seccionNombre.textContent = data.title;
             seccionImg.src = data.picture_medium;
             numeroDeTracks.textContent += data.nb_tracks;
             username.textContent += data.creator.name;


             let tracks = data.tracks.data
             let listaDeTemas = document.querySelector('.tracks');

             

             console.log(tracks)
             alltraks = ''


             for (let i=0; i < tracks.length; i++) {
                alltraks += `<li class="title"> ${tracks[i].title} </li>`

          

             }
                listaDeTemas.innerHTML = alltraks;




            







             






   })




}
