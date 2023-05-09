import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardsWrapper">
      <div style={{ textAlign: "right" }}>{props?.data?.length}</div>
      {props.data?.map((card, index) => {
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
    </div>
  );
};

export default Card;
