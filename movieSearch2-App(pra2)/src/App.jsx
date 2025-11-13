import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';

const App = () => {
  const [movie, setMovie] = useState([]);
  const [quary, setQuary] = useState('');
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [loading, setLoading] = useState(false)

  const API_KEY = 'f7798b09'
  const fetchMovieAPI = async () => {
    if (!quary || quary === '') {
      setLoading(true)
      return
    }
    try {
      const resepone = await fetch(`https://www.omdbapi.com/?s=${quary}&page=${page}&apikey=${API_KEY}`);
      const data = await resepone.json();

      if (data.Response === 'True') {
        setMovie(data.Search);
        setTotalResult(Number(data.totalResults));
      } else {
        setMovie([])
        setTotalResult(0)
      }

    } catch (error) {
      console.log(error.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMovieAPI();
  }, [page])

  const handleSearch = (inp) => {
    setQuary(inp);
    setPage(1);
    fetchMovieAPI();
  }

  const totalPage = Math.ceil(totalResult / 10);

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <MovieList movie={movie} loading={loading} />
      {totalPage > 1 && <Pagination page={page} setPage={setPage} totalPage={totalPage} />}
    </>
  )
}

export default App