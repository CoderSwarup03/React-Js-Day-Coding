import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header className='bg-white shadow-md sticky top-0 z-50'>
                <div className='max-w-6xl mx-auto flex justify-between items-center p-5'>
                    <div>
                        <Link to={'/'} className='text-2xl font-bold text-amber-500'>
                            🍳RecipeShare
                        </Link>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <Link 
                        to={'/'}
                        className='text-xl font-bold text-amber-500 hover:text-amber-600 hover:underline cursor-pointer'>Home</Link>
                        <Link 
                        to={'/submit'}
                        className='text-xl font-bold text-amber-500 hover:text-amber-600 hover:underline cursor-pointer'>Submit Recipe</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header