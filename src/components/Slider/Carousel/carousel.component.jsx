import React from 'react';
import './carousel.styles.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ImgCarousel1 from './../../../assets/img/doctors.png';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className='carousel'>
      <Slider {...settings}>
        <div className='carousel__item'>
          <img src={ImgCarousel1} alt='' className='carousel__img' />
        </div>
        <div className='carousel__item'>
          <img src={ImgCarousel1} alt='' className='carousel__img' />
        </div>
        <div className='carousel__item'>
          <img src={ImgCarousel1} alt='' className='carousel__img' />
        </div>
        <div className='carousel__item'>
          <img src={ImgCarousel1} alt='' className='carousel__img' />
        </div>
        <div className='carousel__item'>
          <img src={ImgCarousel1} alt='' className='carousel__img' />
        </div>
        <div className='carousel__item'>
          <img src={ImgCarousel1} alt='' className='carousel__img' />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
