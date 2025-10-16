import React, { useContext } from 'react'
import RecipeProvider from '../context/RecipeProvider'
const Pagenation = () => {
    const { page, totalResult, setPage, fetchProducts } = useContext(RecipeProvider);
    const handlePage = async (newPage) => {
        fetchProducts(newPage);
        setPage(newPage);
    }
    return (
        <>
            <div className='flex justify-center items-center gap-2'>
                <button
                    disabled={page === 1}
                    onClick={() => handlePage(page - 1)}
                    className='text-xl bg-blue-400 px-3 py-2 rounded-md'>Prev</button>
                <span>{page} of {totalResult}</span>
                <button
                    disabled={page === totalResult}
                    onClick={() => handlePage(page + 1)}
                    className='text-xl bg-blue-400 px-3 py-2 rounded-md'>Next</button>
            </div>
        </>
    )
}

export default Pagenation  