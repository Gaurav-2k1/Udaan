import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import styled from 'styled-components'
import { Container } from 'reactstrap';
import th from '../../assets/teacher.jpg';
import './Gallery.css'
const Gallery = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true
    };
    return (
        <section className='gal' id='gallery'>
            <Container className='classcon'>
                <h2 className='gallery'>Our gallery</h2>

                <Slider  {...settings}>
                    <img src={th} alt="" className='sliderimg' />

                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />
                    <img src={th} alt="" className='sliderimg' />


                </Slider>
            </Container>
        </section>





    )
}

const Carousel = styled(Slider)`
    margin-top:20px;
    &>button{
        opacity:0;
        height:100%;
        width:5vw;
        z-index:1;

        &:hover{
            opacity:1;
            transition:opacity 0.2s ease 0s;
        }
    }
    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150,158,171);
        }
    }

    li.slick-active button:before{
        color:white;
    }

    .slick-list{
        overflow:initial
    }
    .slick-prev{
        left:-75px;
    }
    .slick-next{
        right:-75px;
    }
`

export default Gallery