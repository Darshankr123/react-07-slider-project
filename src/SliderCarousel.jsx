import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { list } from "./data";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
const SlickCarousel = () => {
  const [people, setPeople] = useState(list);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {people.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <article
              // className="slide "
              key={id}
            >
              <img src={image} alt={name} className="person-img" />

              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
