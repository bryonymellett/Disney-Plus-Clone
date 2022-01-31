import React from 'react'
import styled from 'styled-components'


export default function Viewers() {
    return (
        <Container>

            <Wrap>
                <img src = "/img/images/viewers-disney.png" />
                <video autoPlay loop muted>
                <source src="/img/videos/disney.mp4" /></video>
            </Wrap>
            <Wrap>
                <img src = "/img/images/viewers-pixar.png" />
                <video autoPlay loop muted>
                <source src="/img/videos/pixar.mp4" /></video>
            </Wrap>
            <Wrap>
                <img src = "/img/images/viewers-marvel.png" />
                <video autoPlay loop muted>
                <source src="/img/videos/marvel.mp4" /></video>
            </Wrap>
            <Wrap>
                <img src = "/img/images/viewers-starwars.png" />
                <video autoPlay loop muted>
                <source src="/img/videos/star-wars.mp4" /></video>
            </Wrap>
            <Wrap>
                <img src = "/img/images/viewers-national.png" />
                <video autoPlay loop muted>
                <source src="/img/videos/national-geographic.mp4" /></video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    padding: 30px 0 30px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
    
`

const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    padding-top: 56%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.94) 0s;
    
    img {
        inset: 0px;
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        z-index: 2;
    }

      video {
        display: block;
        position: absolute;
        object-fit: cover;
        top: 0px;
        height: 100%;
        width: 100%;
        opacity: 0;
       
    }
          

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 /72%) 0px 30px 22px -10px;

            video{
                opacity: 1;
            }

    
    }
`