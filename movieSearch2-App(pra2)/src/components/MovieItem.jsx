import React from 'react'

const MovieItem = ({ item }) => {
  return (
    <div className='border border-green-500 rounded-md flex flex-col gap-3'>
      <img src={item.Poster} alt={item.Title} className='h-[200px] w-[300px] object-center' />
      <h3>{item.Title}</h3>
      <div className='flex justify-between gap-3 mx-2'>
        <p>{item.Year}</p>
        <p>{item.Type}</p>
      </div>
      <a href='' className='bg-blue-500 text-white px-3 py-2 rounded-md cursor-pointer'>Details</a>
    </div>
  )
}

export default MovieItem