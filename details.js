function detailsMovies(){

    const url = window.location.href;  // Pega a URL completa
    const id = url.split('?');  // Extrai o valor do parâmetro 'id'

    const urlTeste = `https://api.themoviedb.org/3/movie/${id}?language=en-US`


      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWY5NGM4ZjA0OTdlNThjZGRjNmM1OWUxNWYxOTVmNyIsIm5iZiI6MTczMjA1MzA5NS41Mjk2NjE0LCJzdWIiOiI2NzM3YzIyYjA1NDJhYzdlZjZjZjZmMmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.S_xBDjwdqv80iFQOUHAF7yqomvA4s-6c_QV-_uPeI60'
        }
      };
      
      fetch(`${urlTeste}`, options)
        .then(res => res.json())
        .then(res => {

            const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"
            let containerDetails = document.querySelector('.details')
            let infoDestaque = document.querySelector('.info-destaque')


            const genres = res?.genres?.map(genre => genre.name).join(", ");

            let info = `      
            
            <img src="${IMAGE_BASE_URL}${res.backdrop_path}" alt="" class="img-fluid">
            <p class="name-details">${res.original_title}</p>

                <div class="row">
                <div class="col-md-6 text-center">
                <img src="${IMAGE_BASE_URL}${res.poster_path}" alt="" class="img-fluid">
                </div>
                <div class="col-md-6 text-light sinopse">

                        <h2>${res.title}</h2>
                        <p>${res.overview}</p>

                    <div class="container-details d-flex flex-column">

                        <label>Release Date:</label>
                        <span>${res.release_date}</span>
                        
                        <label>Run time</label>
                        <span>${res.runtime}</span>
                        
                        <label>Genres</label>
                        <span>${genres}</span>

                    </div>
                    </div>
                </div>
            `
            containerDetails.innerHTML += info
        })
        .catch(err => console.error(err));
}
detailsMovies()