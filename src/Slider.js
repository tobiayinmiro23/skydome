import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src="/skydome images/Slide-img1.jpg" alt="img" />
          </div>
          <div>
             <img src="/skydome images/Slide-img2.jpg" alt="img" />
          </div>
          <div>
            <img src="/skydome images/Slide-img3.jpg" alt="img" />
          </div>
          <div>
            <img src="/skydome images/Slide-img4.jpeg" alt="img" />
          </div>
          <div>
            <img src="/skydome images/Slide-img5.jpeg" alt="img" />
          </div>
          <div>
            <img src="/skydome images/Slide-img6.jpeg" alt="img" />
          </div>
        </Slider>
      </div>
    );
  }
}