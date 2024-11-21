
  function listMovies(){


    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWY5NGM4ZjA0OTdlNThjZGRjNmM1OWUxNWYxOTVmNyIsIm5iZiI6MTczMjA1MzA5NS41Mjk2NjE0LCJzdWIiOiI2NzM3YzIyYjA1NDJhYzdlZjZjZjZmMmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.S_xBDjwdqv80iFQOUHAF7yqomvA4s-6c_QV-_uPeI60'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => {
        let results = res.results;
        console.log(results);

        const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

      results.map((element, index) => {

       let cardContainer = document.querySelector('.card-container')
       let card = `
        <div class="col-md-2 wrapperCard ">
            <a href="details.html?${element.id}">
             
                <img src="${IMAGE_BASE_URL}${element.poster_path}" alt="Capa do Filme" class="img-fluid">
                <p class="name">${element.original_title}</p>
             
            </a>  
           </div>         
       `
       cardContainer.innerHTML += card
      }) 
      })
      .catch(err => console.error(err));

  }

listMovies()

