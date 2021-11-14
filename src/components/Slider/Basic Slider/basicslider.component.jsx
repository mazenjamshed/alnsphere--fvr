import React from 'react';
import './basicslider.styles.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ImgCarousel1 from './../../../assets/img/doctors.png';

const BasicSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '5rem',
  };
  return (
    <div className='slider'>
      <Slider {...settings}>
        <div className='slider__item'>
          <img src={ImgCarousel1} alt='' className='slider__img' />
        </div>
        <div className='slider__item'>
          <img src={ImgCarousel1} alt='' className='slider__img' />
        </div>
        <div className='slider__item'>
          <img src={ImgCarousel1} alt='' className='slider__img' />
        </div>
        <div className='slider__item'>
          <img src={ImgCarousel1} alt='' className='slider__img' />
        </div>
        <div className='slider__item'>
          <img src={ImgCarousel1} alt='' className='slider__img' />
        </div>
        <div className='slider__item'>
          <img src={ImgCarousel1} alt='' className='slider__img' />
        </div>
      </Slider>
    </div>
  );
};

export default BasicSlider;
