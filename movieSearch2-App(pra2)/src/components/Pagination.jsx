import React from 'react'

const Pagination = ({ page, setPage, totalPage }) => {
    return (
        <>
            <div className='px-3 py-2 border border-green-500 rounded-md flex justify-center items-center'>
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className={`text-lg font-semibold bg-gray-100 hover:bg-gray-120 cursor-pointer px-2 py-1 rounded-md ${page === 1 && 'opacity-50 cursor-not-allowed'}`}>Prev</button>
                <span>{page}of {totalPage}</span>
                <button
                    disabled={page === totalPage}
                    onClick={() => setPage(page + 1)}
                    className={`text-lg font-semibold bg-gray-100 hover:bg-gray-120 cursor-pointer px-2 py-1 rounded-md ${page === totalPage && 'opacity-50 cursor-not-allowed'}`}>Next</button>
            </div>
        </>
    )
}

export default Pagination