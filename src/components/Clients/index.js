import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cliente_1 from "../../images/clients/1.png";
import cliente_2 from "../../images/clients/2.png";
import cliente_3 from "../../images/clients/3.png";
import cliente_4 from "../../images/clients/4.png";
import cliente_5 from "../../images/clients/5.png";
import cliente_6 from "../../images/clients/6.png";
import cliente_7 from "../../images/clients/7.png";
import cliente_8 from "../../images/clients/8.png";
import cliente_9 from "../../images/clients/9.png";
import cliente_10 from "../../images/clients/10.png";
import cliente_11 from "../../images/clients/11.png";


import "./styles.css";

const Clients = () => {
  var settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: false,
    prevArrow: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="clients">
      <div className="clients-section">
        <div className="clients-text">
          <h1 className="clients-title">CLIENTES</h1>
          <div className="clients-image">
            <StaticImage
              src="../../images/bottom.png"
              alt="Logo Vop"
              layout="fullWidth"
            />
          </div>
        </div>
        <section>
          <Slider {...settings}>
            <div className="clients-card-image">
                <img src={cliente_1} alt="Post Instagram" />
            </div>
            <div className="clients-card-image">
              <img src={cliente_2} alt="Post Instagram" />
            </div>
            <div className="clients-card-image">
              <img src={cliente_3} alt="Post Instagram" />
            </div>
            <div className="clients-card-image">
              <img src={cliente_4} alt="Post Instagram" />
            </div>
            <div className="clients-card-image">
              <img src={cliente_5} alt="Post Instagram" />
            </div>
            <div className="clients-card-image">
                <img src={cliente_6} alt="Post Instagram" />
            </div>
            <div className="clients-card-image">
              <img src={cliente_7} alt="Post Instagram" />
            </div>
            <div className="clients-card-image">
              <img src={cliente_8} alt="Post Instagram" />
            </div>
            <div className="clients-card-image">
              <img src={cliente_9} alt="Post Instagram" />
            </div>
            <div className="clients-card-image">
              <img src={cliente_10} alt="Post Instagram" />
            </div>
            <div className="clients-card-image">
              <img src={cliente_11} alt="Post Instagram" />
            </div>
          </Slider>
        </section>
      </div>
    </div>
  );
}

export default Clients;