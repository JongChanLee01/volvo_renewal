import React from "react";
import ModelList from "react-slick";

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";

function Model() {
    const setting = {
        dots: true,
        arrow: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
    };

    return(
        <>
            <div className="model_wrap">
                <h2>Volvo Model</h2>
                <ModelList { ...setting }>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/A green Volvo XC40 Recharge pure electric standing_.png" alt="electric XC40" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/A silver Volvo XC40 SUV standing still.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/The side profile of a pure electric Volvo C4.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/The side profile of a Volvo S60 sedan.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/The side profile of a Volvo S90 Recharge plu.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/The side profile of a Volvo S90 sedan.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/The side profile of a Volvo V60 Cross Countr.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/The side profile of a Volvo V90 Cross Countr.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/The side profile of a Volvo XC60 Recharge pl.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/The side profile of a Volvo XC60 SUV.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/The side profile of a Volvo XC90 Recharge pl.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                    <div className="model_list">
                        <div className="list_margin">
                            <div className="model_image">
                                <a href="#none">
                                    <img src="../image/main_image/main_model/The side profile of a Volvo XC90 SUV.png" />
                                </a>
                            </div>
                            <div className="model_btn">
                                <button>혜택 보기</button>
                                <button>견적 내기</button>
                            </div>
                        </div>
                    </div>
                </ModelList>
            </div>
        </>
    )
}

export default Model;