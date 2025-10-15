import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <>
      <div>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}
        />
        <div className='flex flex-col gap-2'>
          <h2>{movie.Title}</h2>
          <div>
            {movie.Year}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard