import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ movie }) => {
  return (
    <>
      <div className='max-w-6xl mx-auto border-2 border-green-500 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {movie.length === 0 ? (
            <div className='flex justify-center items-center'>
              <h1 className='text-center text-lg font-semibold'>No Movie Found</h1>
            </div>
          ) : (
            movie.map((item, idx) => {
              return (
                <MovieItem key={idx} item={item} />
              )
            })
          )}
        </div>
      </div>
    </>
  )
}

export default MovieList