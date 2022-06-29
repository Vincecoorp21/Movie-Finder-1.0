//alert('ey');
// let buscar = document.getElementById('buscar');
// let btnBuscar = document.getElementById('btn');

// btnBuscar.addEventListener('click',fBuscar);

// fBuscar(){
//   axios
//   .get('https://api.github.com/users/GeerDev')
//   .then(res => {
//     console.log(res)
//   })

// }
// axios
//   .get(
//     'https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX'
//   )
//   .then((respuesta) => {
//     console.log(respuesta.data.results[1].title);
//     //Nos saca un array con las peliculas (20 pel)
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 192e0b9821564f26f52949758ea3c473

//Podemos cambiar lo anterior con Async Away. Esto se hace porque a veces necesitaremos poner varios .then uno debajo de otro
const obtenerPeliculas = async () => {
  try {
    const respuesta = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX'
    );
    console.log(respuesta);
    let peliculas = [];
    respuesta.data.results.forEach(pelicula => {
      console.log(pelicula);
      peliculas += `<div class="pelicula">
      <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
      <h3 class="titulo">${pelicula.title}</h3><br/>
      <p>Valoración:${pelicula.vote_average} </p>
    </div>`;
    });
    document.getElementById('contenedor').innerHTML = peliculas;
  } catch (error) {
    console.log(error);
  }
};
obtenerPeliculas();
