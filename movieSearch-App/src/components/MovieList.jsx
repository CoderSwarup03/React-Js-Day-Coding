import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ movie, loading }) => {
  return (
    <>
      <div className='max-w-[85%] mx-auto bg-white p-4 mt-4 rounded-md'>
        {
          movie.length === 0 ?
            (<p className='text-center text-2xl text-gray-500'>No Movie Found</p>)
            : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                  {movie.map((movie) => {
                    return(
                      <MovieItem movie={movie} key={movie.imdbID} />
                    )
                  })}
              </div>
            )
        }
      </div>
    </>
  )
}

export default MovieList