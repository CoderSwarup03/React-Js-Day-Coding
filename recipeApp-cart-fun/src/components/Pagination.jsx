import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
const Pagination = () => {
    const { page, setPage, totalPage, fetchProducts } = useContext(ProductContext)

    const handlePagination = async (newPage) => {
        await fetchProducts(newPage);
        setPage(newPage);
    }
    
    return (
        <>
            <div className='flex justify-center items-center gap-3 mt-5'>
                <button
                    disabled={page === 1}
                    onClick={() => handlePagination(page - 1)}
                    className='text-semibold px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer'>Prev</button>
                <span>{page} of {totalPage}</span>
                <button
                    disabled={page === totalPage}
                    onClick={() => handlePagination(page + 1)}
                    className='text-semibold px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer'>Next</button>
            </div>
        </>
    )
}

export default Pagination                                                                                                                              