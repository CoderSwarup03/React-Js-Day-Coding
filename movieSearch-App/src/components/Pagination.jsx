import React from 'react'
const Pagination = ({ page, setPage, totolPage }) => {
  return (
    <>
      <div className='flex justify-center items-center gap-4 mt-4'>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`bg-blue-400 px-3 py-2 rounded-md font-semibold ${page === 1 && 'opacity-50 cursor-not-allowed'}`}>Prev</button>
        <span>{page} of {totolPage}</span>
        <button
          disabled={page === totolPage}
          onClick={() => setPage(page + 1)}
          className={`bg-blue-400 px-3 py-2 rounded-md font-semibold ${page === totolPage && 'opacity-50 cursor-not-allowed'}`}>Next</button>
      </div>
    </>
  )
}

export default Pagination