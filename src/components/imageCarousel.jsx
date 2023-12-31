import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ImageCarousel = ({ dataArray }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set the delay between slides (in milliseconds)
        responsive: [
            {
                breakpoint: 600, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
    };

    return (
        <Slider {...settings}>
            {dataArray.map((image, id) => (
                <img src={image.smallImage} className="img-responsive"  alt={`slide ${id}`} />
            ))}
        </Slider>
    );
};
