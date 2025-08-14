import './App.css';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
import SearchIcon from './search.svg'

const API_URL = "http://www.omdbapi.com?apikey=6b5ca3b5";
const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search);

  }

  useEffect(() => {
    searchMovies('superman');
  }
    , []);

  return (
    <>

      <div className='app'>
        <h1>Movie Land</h1>

        <div className='search'>
          <input
            type="text"
            placeholder='Search for a movie'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value) }
          />

          <img src={SearchIcon}
            alt='search'
            onClick={() => searchMovies(searchTerm)}
          />
        </div>


        {

          movies?.length > 0
            ? (
              <div className='container'>

              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
              </div>

            ) : (
              <div className='empty'>
                <h2>No Movies Found</h2>
              </div>

            )
        }



      </div>


    </>
  );
}

export default App;
