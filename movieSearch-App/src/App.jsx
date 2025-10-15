import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';

const App = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const API_KEY = "f7798b09";

  const fetchMovieApi = async () => {
    if (!query) return
    setLoading(true);
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&page=${page}&apikey=${API_KEY}`);
      const data = await response.json();
      console.log(data);

      if (data.Response === "True") {
        setMovie(data.Search);
        setTotalResults(Number(data.totalResults));
      } else {
        totalResults(0);
        setMovie([]);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchMovieApi();
  }, [page])

  const searchHandle = (input) => {
    setQuery(input);
    setPage(1)
    fetchMovieApi()
  }

  const totolPage = Math.ceil(totalResults / 10);

  return (
    <>
      <div className='min-h-screen bg-gray-100 p-4'>
        <h1 className='text-center text-3xl font-bold text-green-500'>🎬Movie SearchApp</h1>
        {/* added SearchBar Comp */}
        <SearchBar onSearch={searchHandle} />
        {loading && <h1 className='text-center text-3xl font-bold text-green-500'>Loading...</h1>}

        <MovieList movie={movie} loading={loading} />

        {totolPage > 1 && (<Pagination page={page} setPage={setPage} totolPage={totolPage} />)}
      </div>
    </>
  )
}

export default App