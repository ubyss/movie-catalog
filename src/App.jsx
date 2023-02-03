import React, { useEffect, useState } from "react";
import blankImage from "./assets/image-blank.png";

const App = () => {
  const movieStorage = JSON.parse(localStorage.getItem('movies'))
  const [movie, setMovie] = useState({name: "", image: blankImage, date: "" });
  const [movieList, setMovieList] = useState(movieStorage ? movieStorage : []);

  const { name, image, date } = movie;

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movieList));
  }, [movieList])

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
      setMovieList(movies);
    }
  }, []);
  

  function movieInfo(e) {
    setMovie(() => {
      return {...movie,[e.target.name]: e.target.value };
    });
  }

  function saveMovie(e) {
    e.preventDefault();

    setMovieList((arr) => [...arr, movie]);

    setMovie(() => {return { name: "", image: blankImage, date: "",}});
  }

  return (
    <div className="container-glass">
      <div className="container-form">
        <img className="movie-image" src={image} />
        <form action="submit" onSubmit={saveMovie} className="movie-form">
          <input
            value={name}
            className="input-text"
            type="text"
            placeholder="Nome do Filme"
            name="name"
            onChange={(e) => movieInfo(e)}
          />
          <input
            value={image === blankImage ? "" : image}
            className="input-text"
            type="text"
            placeholder="Url da imagem"
            name="image"
            onChange={(e) => movieInfo(e)}
          />
          <input
            value={date}
            className="input-text"
            type="date"
            placeholder="Data de estreia"
            name="date"
            onChange={(e) => movieInfo(e)}
          />
          <button className="submit-btn">Salvar filme</button>
        </form>
      </div>
      <h1 className="title">Seu catálogo de filmes</h1>
      <main className="movie-catalog">
        {movieList &&
          movieList.map((movie) => {
            return (
              <div className="movie-card">
                <img className="movie-card__image" src={movie.image}></img>
                <span className="movie-card__name">{movie.name}</span>
                <span className="movie-card__date">{movie.date}</span>
              </div>
            );
          })}
      </main>
    </div>
  );
};

export default App;
