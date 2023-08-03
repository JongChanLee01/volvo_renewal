import React from "react";

import '../App.css';


function Event() {
    return(
        <div>
            <div className="volvo_event" id="v_event">
                <div className="display_wrap">
                    <div className="event_wrap">
                        <a href="#none">
                            <img src="../image/main_image/content/event/1004.jpg" alt="하이드아웃크루 모집" />
                        </a>
                    </div>
                    <div className="event_wrap">
                        <a href="#none">
                            <img src="../image/main_image/content/event/0407.jpg" alt="어프렌티스 프로그램 4기 선발" />
                        </a>
                    </div>
                    <div className="event_wrap">
                        <a href="#none">
                            <img src="../image/main_image/content/event/0425.jpg" alt="헤이 패밀리 개최" />
                        </a>
                    </div>
                    <div className="event_wrap">
                        <a href="#none">
                            <img src="../image/main_image/content/event/0801.jpg" alt="익스클루시브 바이 볼보 골프 에디션 2종 판매" />
                        </a>
                    </div>
                    <div className="event_wrap">
                        <a href="#none">
                            <img src="../image/main_image/content/event/0930.jpg" alt="클린 올레" />
                        </a>
                    </div>
                    <div className="event_wrap">
                        <a href="#none">
                            <img src="../image/main_image/content/event/211201.jpg" alt="볼보 게임" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;