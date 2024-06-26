import React from 'react'
import './index.css'
function Pagination({ pageNo, setPageNo, noMore }) {
    return (
        <div className="pagination">
            {pageNo > 1 && <button className="pagination-button" onClick={() => setPageNo("Previous")}>Previous</button>}
            {!noMore && <p className='page-no'>{pageNo}</p>}
            {!noMore && <button className="pagination-button" onClick={() => setPageNo("Next")}>Next</button>}
        </div >
    )
}

export default Pagination