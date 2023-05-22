import React, { useState } from "react";
import "./Card.css";

import ReactPaginate from "react-paginate";

const Card = (props) => {
  const items = props?.data;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems?.map((card, index) => {
          return (
            <div className="card" key={index}>
              <p className="date">
                {card.date} {card.category}
              </p>
              <p className="content">
                <a href={card?.link}>{card.title}</a>
              </p>
              <hr />

              <div>
                {card.linkedThemes?.map((item, i) => (
                  <a href={item.link ? item.link : ""} className="link" key={i}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  console.log("items", items);
  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="cardsWrapper">
      <div style={{ textAlign: "right" }}>{props?.data?.length}</div>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Card;
