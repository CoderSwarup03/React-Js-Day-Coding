import React from 'react'

const Page = ({ page, setPage, totalPage }) => {
    return (
        <>
            <div className='flex justify-center gap-5 items-center mt-3'>
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className='text-xl font-semibold px-3 py-1 rounded-md cursor-pointer bg-green-500 hover:bg-green-600'>Prev</button>
                <span className='border-2 border-green-600 px-3 py-1 rounded-md'>{`page ${page} of ${totalPage}`}</span>
                <button
                    disabled={page === totalPage}
                    onClick={() => setPage(page + 1)}
                    className='text-xl font-semibold px-3 py-1 rounded-md cursor-pointer bg-green-500 hover:bg-green-600'>Next</button>
            </div>
        </>
    )
}

export default Page