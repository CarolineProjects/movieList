const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.themoviedb.org/3/collection/${key}', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));


    const key = '';
    c
