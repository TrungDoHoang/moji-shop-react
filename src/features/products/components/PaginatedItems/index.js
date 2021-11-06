import React, { useEffect, useState } from 'react'
import Items from '../Items';
import ReactPaginate from 'react-paginate'
import './Pagination.css'
import { useHistory } from 'react-router';

function PaginatedItems({ itemsPerPage, items }) {
    const location = useHistory()
    // Chúng ta bắt đầu với một danh sách các item trống.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items, location.location]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <nav aria-label="Page navigation">
                <ReactPaginate
                    containerClassName='pagination justify-content-center'
                    activeClassName="active"
                    pageLinkClassName="page-link"
                    
                    pageClassName="page-item"
                    forcePage={0}
                    breakLabel="..."
                    // initialPage={5}
                    nextLabel="Next"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    renderOnZeroPageCount={null}
                />
            </nav>
        </>
    );
}

export default PaginatedItems
