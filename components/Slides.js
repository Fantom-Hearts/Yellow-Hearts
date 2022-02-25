import React from "react";
import Slider from "react-slick";

const Slides = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    return (
        <div className="mt-12 mx-auto mb-8 overflow-hidden">
            <Slider {...settings}>
                <div>
                    <img src="/assets/heart1.png" alt />
                </div>
                <div>
                    <img src="/assets/heart2.png" alt />
                </div>
                <div>
                    <img src="/assets/heart3.png" alt />
                </div>
                <div>
                    <img src="/assets/heart4.png" alt />
                </div>
                <div>
                    <img src="/assets/heart5.png" alt />
                </div>
                <div>
                    <img src="/assets/heart6.png" alt />
                </div>
                <div>
                    <img src="/assets/heart1.png" alt />
                </div>
                <div>
                    <img src="/assets/heart2.png" alt />
                </div>
                <div>
                    <img src="/assets/heart3.png" alt />
                </div>
                <div>
                    <img src="/assets/heart4.png" alt />
                </div>
                <div>
                    <img src="/assets/heart5.png" alt />
                </div>
                <div>
                    <img src="/assets/heart6.png" alt />
                </div>
            </Slider>
        </div>
    );
};

export default Slides;
