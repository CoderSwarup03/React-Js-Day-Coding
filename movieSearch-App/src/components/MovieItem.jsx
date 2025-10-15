import React from 'react'

const MovieItem = ({ movie }) => {
  return (
    <>
      <div className='rounded-md flex flex-col gap-2 p-4'>
        <img className='w-full' src={movie.Poster} alt="" />
        <h1 className='text-2xl font-bold'>{movie.Title}</h1>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>{movie.Year}</h1>
          <h1 className='text-2xl font-bold'>{movie.Type}</h1>
        </div>
        <button className='w-full py-2 rounded-md text-bold bg-blue-500 hover:bg-blue-600 font-bold'>Details</button>
      </div>
    </>
  )
}

export default MovieItem