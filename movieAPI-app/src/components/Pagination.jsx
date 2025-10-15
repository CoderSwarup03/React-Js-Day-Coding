import React from 'react'

const Pagination = ({ page, setPage, totalPage }) => {
  return (
    <>
      <div className='flex justify-center gap-4'>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`
            ${page === 10 ? 'cursor-not-allowed bg-blue-500' : 'cursor-pointer bg-blue-500 hover:bg-blue-600'}
            
            text-xl font-semibold px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600`}
        >Prev</button>
        <span>{`page ${page} of ${totalPage}`}</span>
        <button
          disabled={page === totalPage}
          onClick={() => setPage(page + 1)}
          className={`${page === totalPage ? 'cursor-not-allowed bg-blue-500' : 'cursor-pointer bg-blue-500 hover:bg-blue-600'}`}
        >Next</button>
      </div>
    </>
  )
}

export default Pagination