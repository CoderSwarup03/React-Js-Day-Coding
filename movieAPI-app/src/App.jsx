import React, { useEffect, useState } from 'react'
import MovieSearch from './components/MovieSearch'
import MovieLIst from './components/MovieLIst'
import Pagination from './components/Pagination'

const App = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);


  const API_KEY = 'f7798b09';
  // fetch Movie

  const fetchMovie = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=${API_KEY}`);
      const data = await response.json();
      console.log(data);

      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalResults(Number(data.totalResults));
        setLoading(false);
      } else {
        setMovies([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    fetchMovie();
  })

  const handleSeach = (search) => {
    setQuery(search);
    fetchMovie()
  }

  const totalPage = Math.ceil(totalResults / 10);
  return (
    <>
      <div>
        <h1 className='text-3xl font-bold text-center text-blue-600'>Search Your FavMovie⭐</h1>
        <MovieSearch onSerch={handleSeach} />
        {/* {loading && <p className='text-center text-2xl font-semibold'>Loading...</p>} */}
        <MovieLIst movies={movies} loading={loading} />
        <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      </div>
    </>
  )
}

export default App