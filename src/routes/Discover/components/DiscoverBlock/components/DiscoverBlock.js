import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DiscoverItem from "./DiscoverItem";
import "../styles/_discover-block.scss";

function scrollContainer(id, { isNegative } = {}) {
  return () => {
    const scrollableContainer = document.getElementById(id);
    const amount = isNegative
      ? -scrollableContainer.offsetWidth
      : scrollableContainer.offsetWidth;

    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

export default function DiscoverBlock({
  text,
  id,
  data,
  imagesKey = "images",
}) {
  const mapElements = () => {
    return data[0].map((item, index) => {
      console.log(item, data[0].length, index);
      return (
        <DiscoverItem
          key={index}
          images={item.images || item.icons}
          name={item.name}
        />
      );
    });
  };
  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        {data.length ? (
          <div className="animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={scrollContainer(id, { isNegative: true })}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollContainer(id)}
            />
          </div>
        ) : null}
      </div>
      <div className="discover-block__row" id={id}>
        {mapElements()}
      </div>
    </div>
  );
}
