import React from "react";
import Slider from "react-slick";

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";


function Mainslider() {
    
    const setting = {
        dots: true,
        arrow: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
    };

    

    return(
        <>
            <div className="main_slide_wrap">
                <Slider { ...setting } >
                    <div className="image_wrap">
                        <div className="image_text">
                            <div className="text_wrap">
                                <p>제목, 간단한 설명 넣을곳</p>
                                <button>버튼</button>
                            </div>
                            <img src="../image/main_image/main_slide/xc90_hybrid.jpg" alt="xc90 hybrid" />
                        </div>
                    </div>
                    <div className="image_wrap">
                        <div className="image_text">
                            <div className="text_wrap">
                                <p>제목, 간단한 설명 넣을곳</p>
                                <button>버튼</button>
                            </div>
                            <img src="../image/main_image/main_slide/s90-hybrid-hero-21x9.jpg" alt="s90 hybrid" />
                        </div>
                    </div>
                    <div className="image_wrap">
                        <div className="image_text">
                            <div className="text_wrap">
                                <p>제목, 간단한 설명 넣을곳</p>
                                <button>버튼</button>
                            </div>
                            <img src="../image/main_image/main_slide/xc60-hybrid-hero-21x9.jpg" alt="xc60 hybrid" />
                        </div>
                    </div>
                    <div className="image_wrap">
                        <div className="image_text">
                            <div className="text_wrap">
                                <p>제목, 간단한 설명 넣을곳</p>
                                <button>버튼</button>
                            </div>
                            <img src="../image/main_image/main_slide/xc90-banner_consumer-insight_2560x1097.jpg" alt="xc90 hybrid" />
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
};

export default Mainslider;