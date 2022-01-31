import { render } from '@testing-library/react';
import React, { useEffect, useReducer, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { AppState } from 'react-native';
import { selectOriginal } from '../Redux/Reducer/MovieSlice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'


function Original () {

    const movies = useSelector(selectOriginal);
          
      let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        swipeToSlide: true,
        slidesToScroll: 1,
        autoplay: false
        }
    
  return(
    <>
    

    <Carouselcontain>
    <h3 className = "h3c">Disney Plus Originals</h3>



    <Carousel {...settings}>

        {
            movies && movies.map((value, index) => (
            <Wrap key={index}>
              <NavLink to = {`/detail/${value.id}`}>
                <img src = {value.CardImg} alt={value.id} />
              </NavLink>
              
            </Wrap>
            ))
        }

                
         
     </Carousel>
     </Carouselcontain>
</>
   );
  
  };


const Carouselcontain = styled.div`
  padding: 0.5rem 0;

     
  h3 {
    color: rgb(211, 211, 211);
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
    font-size: 1.3rem;
    font-family: Roboto;
    font-weight: 300 !important
    margin-top: 0px;
    text-align: left;
    margin-top: 1.8rem;
    margin-bottom: 1rem;
}
`


const Carousel = styled(Slider)`


  .slick-list {
    height: 100%;
      overflow: visible;
 
}

  .slick-slide {
    margin: 0 0px;
    z-index: 0
    opacity: 100%

    }

  button {
      z-index: 1;

  }
`
const Wrap = styled.div`
  padding-top: 0%;
  padding-bottom: 0;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  object-position: center;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
 
  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    top: 0;
    z-index: 2;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;


export default Original;