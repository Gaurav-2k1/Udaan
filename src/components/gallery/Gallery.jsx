import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
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
export default Gallery