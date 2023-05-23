import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import translations from "../../assets/localize/translations";

const Card = (props) => {
  const items = props?.data;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems.length ? (
          <>
            {currentItems?.map((card, index) => {
              return (
                <article className="card-article" key={index}>
                  <div className="card-article__box">
                    <time className="card-article__time">{card.date}</time>
                    <p className="card-article__subtitle"> {card.category}</p>
                  </div>
                  <div className="card-article__tags">
                    <a className="card-article__title-link" href={card?.link}>
                      <h3 className="card-article__title">{card.title}</h3>
                    </a>
                    <ul className="card-article__items">
                      {card.linkedThemes?.map((item, i) => (
                        <li key={i}>
                          <a
                            href={item.link ? item.link : ""}
                            className="card-article__link"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </>
        ) : (
          <h1>{translations.filteredDataIsEmpty}</h1>
        )}
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

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
    <div className="cc-resources__cards">
      <div>{props?.data?.length}</div>
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
