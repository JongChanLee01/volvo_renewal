import React, { useState } from "react";
import Event from "./Event.js";
import News from "./News.js";

import '../App.css';

function Content() {
    const [ b_click, setModal ] = useState(false);

    // const [ event, setEvent ] = useState(true);
    // const [ news, setNews ] = useState(false);

    // const e_tab = document.getElementById("v_event");
    // const n_tab = document.getElementById("v_news");



    // madal window
    function Popup() {
    
        return(
            <>
                <div id="popup_close" className="popup_wrap">
                    <div className="popup_modal">
                        <h1>Volvo Electric</h1>
                        <hr/>
                        <div className="modal_contents">
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                        </div>
                        <hr/>
                        <button onClick={ ()=>{ return( b_click === true ?  setModal(false) : null ) } }>닫기</button>
                    </div>
                </div>
            </>
        )
    }


    // Tab
    
    const Tab = ()=> {
        const data = [
            {
                id : 0,
                title : "Event",
                page : <Event />,
            },
            {
                id : 1,
                title : "News",
                page : <News />,
            }
        ]

        const [ index, setIndex ] = useState(0);
        
        return(
            <div>
                <ul className="tab_btn">
                    {
                        data.map((item => (
                            // key값은 항상 map의 최상위 태그에 해야함
                            <li key = {item.id}>
                                <a href="#"
                                className = { index === item.id ? "on" : ""}
                                onClick = { (e) => { 
                                    e.preventDefault();
                                    setIndex(item.id) 
                                } }>
                                    {item.title}
                                </a>
                            </li>
                        )))
                    }
                </ul>
                {
                    // filter() 함수는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 함수이다.
                    data.filter( item => index === item.id).map(item => (
                        <div key = {item.id}>
                            {item.page}
                        </div>
                    ))
                }
            </div>
        )
    }

    // const Tab = (props)=> {
    //     const tabName = props.tab.tabName;
    //     const tabId = props.tab.id;
    //     const tabOn = props.tab.on;
    //     const tabContent = props.tab.content;

    //     const tabClick = (id)=> {
    //         document.querySelector(".tab_btn li a.on").classList.remove("on");
    //         document.querySelector(".tab_btn li a#" + id ).classList.add("on");
    //     }

    //     return(
    //         <div>
    //             <ul>
    //                 <li>
    //                     <a href="#"
    //                         id={tabId}
    //                         className={tabOn ? "on" : ""}
    //                         onClick={(e)=>{
    //                                 e.preventDefault();
    //                                 tabClick(tabId);
    //                             }
    //                         }
    //                     >
    //                         {tabName}
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //     )
    // }

    // const list = [
    //     {
    //         tabName : "Event",
    //         id : "event",
    //         on : true,
    //         content : <Event />,
            
    //     },
    //     {
    //         tabName : "News",
    //         id : "news",
    //         content : <News />,
    //     }
    // ]

    // Contents window
    return(
        <>
            <div className="content_wrap">
                <h2>Volvo Electric</h2>
                <div className="electric">
                    <div className="video_wrap">
                        <video src="https://jongchanlee01.github.io/volvo_renewal/image/main_image/content/01-electric-car-hero_21x9.mp4" controls width="100%" autoPlay="autoplay" muted="muted" loop="loop" controlsList="nodownload">
                            {/* <source src="./image/main_image/content/01-electric-car-hero_21x9.mp4" type="video/mp4" /> */}
                            {/* <source src="https://jongchanlee01.github.io/volvo_renewal.github.io/image/main_image/content/01-electric-car-hero_21x9.mp4" type="video/mp4" /> */}
                            고객님의 브라우저가 video를 지원하지 않습니다.
                        </video>
                    </div>
                    <div className="electric_text_wrap">
                        <p>
                            <strong>Volvo Recharge</strong>와 함께 당신의 삶을 충전하세요. <br/>
                            볼보의 순수 전기. 우리의 지구에서 영감을 받아, 귀하의 삶을 위해 디자인되었습니다.
                        </p>
                        <button className="popup_click" onClick={ ()=>{setModal(true)} }>간단한 설명 보러가기</button>
                        {b_click=== true ? <Popup /> : null}
                    </div>
                </div>
                <div className="banner">
                    <div className="banner_wrap">
                        <img src="https://jongchanlee01.github.io/volvo_renewal/image/main_image/content/HeroImg03.jpg" />
                        <div className="banner_text">
                            <p>
                                볼보가 큐레이션 하는 새로운 라이프 스타일 제안<br/>
                                <strong>VOLVO LIFESTYLE SHOP</strong>
                            </p>
                        </div>
                        <button>LIFESTYLE SHOP</button>

                        {/* useState 깜빡임 해결법 찾기 */}
                    </div>
                </div>
                <div className="volvo_tab">
                    <h2>Event &amp; News</h2>
                    <Tab />
                    {/* <ul className="tab_btn"> */}
                        {/* {
                            list.map((menu, index)=> {
                                return(
                                    <Tab key={index} tab={menu} />
                                )
                            })
                        } */}
                        {/* <li className="tab01">
                            <a href="#">
                                {tabName}
                            </a>
                        </li>
                        <li className="tab02">News</li> */}
                    {/* </ul> */}
                    {/* <Event />
                    <News /> */}
                </div>
            </div>
        </>
    );
}

export default Content;