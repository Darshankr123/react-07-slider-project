import React, { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [curPerson, setCurPerson] = useState(0);
  const prevSlide = () => {
    setCurPerson((curPerson) => {
      const newPerson = curPerson - 1;
      if (newPerson < 0) {
        return people.length - 1;
      }
      return newPerson;
    });
  };

  const nextSlide = () => {
    setCurPerson((curPerson) => {
      const newPerson = curPerson + 1;
      if (newPerson > people.length - 1) {
        return 0;
      }
      return newPerson;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [curPerson]);

  return (
    <div className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide "
            key={id}
            style={{
              transform: `translateX(${100 * (personIndex - curPerson)}%)`,
              opacity: personIndex === curPerson ? 1 : 0,
              visibility: personIndex === curPerson ? "visible" : "hidden",
            }}
          >
            <img src={image} alt={name} className="person-img" />

            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
