function detailsMovies(){
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

    const urlTeste = `https://api.themoviedb.org/3/movie/${id}?language=en-US`


      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWY5NGM4ZjA0OTdlNThjZGRjNmM1OWUxNWYxOTVmNyIsIm5iZiI6MTczMjY0NzEyNy44NjQ4NzE3LCJzdWIiOiI2NzM3YzIyYjA1NDJhYzdlZjZjZjZmMmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wczlRUhId-mxMMhl9Miwr_VUBF04F5Jw6uOAbtPDQwU'
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
            <div class="">
              <img src="${IMAGE_BASE_URL}${res.backdrop_path}" alt="Capa do Filme" class="w-100">
              <p class="name-details">${res.original_title}</p>
            </div>
          

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