import React from 'react'
import MovieCard from './MovieCard'

const MovieLIst = ({ movies }) => {

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {movies.length === 0 ? (
          <h2 className='text-2xl text-center font-semibold text-red-500'>Search Movie...</h2>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        )}
      </div>
    </>
  )
}

export default MovieLIst