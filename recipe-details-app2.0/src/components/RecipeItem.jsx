import React from 'react'
import { Link } from 'react-router-dom'


const RecipeItem = ({ item }) => {
  return (
    <>
      <div className='bg-white rounded-md overflow-hidden hover: scale-[1.02] transition-transform border-2 border-green-500 flex flex-col items-center w-[200px] md:w-[250px]'>
        <img src={item.img} alt={item.name} className='h-[150px] object-cover w-full' />
        <div className='p-4 flex flex-col gap-2 items-start'>
          <h2 className='text-xl font-bold'>{item.name}</h2>
          <span className='text-md font-bold text-gray-500'>{item.desc}</span>
          <Link to={`/recipe/${item.id}`}
            className='text-lg text-green-500 hover:underline'
          >View Recipe →</Link>
        </div>
      </div>
    </>
  )
}

export default RecipeItem