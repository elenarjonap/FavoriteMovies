const requestURL = "../json/peliculas.json";

async function fetchMoviesJson(){
  const response = await fetch
  (requestURL);
  const movies = await response.json();
  return movies;
} 

  fetchMoviesJson().then(movies =>{
    for (let index = 0; index < movies.peliculas.length; index++)
    {

//console.log(movies.peliculas[index].titulo); 

        const moviesSection = document.getElementById ("movieSection");
        let id = movies.peliculas[index].id;
        let title = movies.peliculas[index].titulo;
        let director = movies.peliculas[index].director;
        let genre = movies.peliculas[index].clasificacion;
        let year = movies.peliculas[index].año;
        let img = movies.peliculas[index].caratula; 
        
        moviesSection.innerHTML += `
        ${title}
        `
      };
  })
