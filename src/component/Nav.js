import React, { useState } from "react";
import Electric from "./nav/nav_model/Electric";
import MildHybrids from "./nav/nav_model/MildHybrids";
import PlugInHybrids from "./nav/nav_model/PlugInHybrids";

import "../App.css";
import DemoDrive from "./nav/DemoDrive";

function Nav() {
  // const menuList = ["모델", "시승신청", "서비스", "볼보역사"];
  const menuList = [
    {
      id : 0,
      title : "모델",
      page : <Menu01/>
    },
    {
      id : 1,
      title :"시승신청",
      page : <Menu02/>
    },
    {
      id : 2,
      title : "서비스",
    },
    {
      id : 3,
      title : "볼보역사",
    }
  ];
  // const [hide, setHide] = useState({
  //   모델: false,
  //   시승신청: false,
  //   서비스: false,
  //   볼보역사: false,
  // });
  const [menu, setMenu] = useState(0);

  // const mouseEvent = (menuName, bool) => {
  //   const change = {...hide}; // hide 복제
  //   change[menuName] = bool; // 아래에서 bool에 true나 false 설정값 넣을곳
  //   setHide(change);
  // }

// 앞으로도 자주 사용하게될 spread 연산자 { ...변수명 } <-스프레드 연산자

  function Menu01() {
    const subList = [
      {
        id : 0,
        title : "Electric",
        title_trn : "순수 전기",
        page : <Electric/>,
      },

      {
        id : 1,
        title : "Plug-in hybrids",
        title_trn : "플러그인 하이브리드",
        page : <PlugInHybrids/>,
      },

      {
        id : 2,
        title : "Mild hybrids",
        title_trn : "마일드 하이브리드",
        page : <MildHybrids/>,
      },
    ]

    const [index, setIndex] = useState(0);

    return(
      <>
        <ul className="sub">
          {
            subList.map((item => (
              <li
                  key={item.id}
                  className="sub_li"
              >
                <a href="#none"
                  onMouseEnter={(e) => { 
                    e.preventDefault();
                    setIndex(item.id) 
                }}
                >
                  {item.title}<span>{item.title_trn}</span>
                </a>
              </li>
            )))
          }
        </ul>
        {
          subList.filter( item=> index === item.id ).map(item => (
            <div key = {item.id}>
              {item.page}
            </div>
          ))
        }
      </>
    )
  }

  function Menu02() {
    const subList = [
      {
        id: 0,
        title: "시승신청",
        page : <DemoDrive/> ,
      },
    ]

    const [index, setIndex] = useState(0);

    return(
      <>
        <ul className="sub">
          {
            subList.map((item => (
              <li
                  key={item.id}
                  className="sub_li"
              >
                <a href="#none"
                  onMouseEnter={(e) => { 
                    e.preventDefault();
                    setIndex(item.id) 
                }}
                >
                  {item.title}<span>{item.title_trn}</span>
                </a>
              </li>
            )))
          }
        </ul>
        {
          subList.filter( item=> index === item.id ).map(item => (
            <div key = {item.id}>
              {item.page}
            </div>
          ))
        }
      </>
    )
  }

  const modalData = [
    
  ]


  return (
    <div>
      <div className="header_wrap">
        <div className="logo">
          {/* <img src="https://jongchanlee01.github.io/volvo_renewal.github.io/image/main_image/volvo_logo.png" alt="로고" /> */}
          <img src={ 'https://jongchanlee01.github.io'+ process.env.PUBLIC_URL + '/image/main_image/volvo_logo.png' } alt="로고" />
        </div>

        <div className="gnb">
          <div className="gnb_wrap">
            <ul>
              {
                // menuList.map((m, index)=> (
                //       <li
                //       key={index}
                //       className={hide[m] ? "active" : ""}
                //       onMouseEnter={()=>mouseEvent(m, true)}
                //       onMouseLeave={()=>mouseEvent(m,false)}
                //       >
                //         <a href="#none">{menuList[index]}</a>
                //       </li>
                // ))
                menuList.map((item => (
                      <li
                        key={item.id}
                        className={ menu === item.id ? "active" : ""}
                        onMouseEnter={(e)=>{
                            e.preventDefault();
                            setMenu(item.id)
                          }
                        }
                        // onMouseLeave={(e)=>{
                        //     e.preventDefault();
                        //     const a = document.getElementsByClassName("li");
                        //     { a === "active" ? "" : "active"}
                        //   }
                        // }
                      >
                        <a href="#none">{item.title}</a>
                        {/* <div className="sub_wrap">
                          <div className="sub_contents">
                          {
                            menuList.filter(item => menu === item.id).map(item => (
                              <div key = {item.id}>
                                {item.page}
                              </div>
                            ))
                          }
                          </div>
                        </div> */}
                      </li>
                )))
              }
              {/* <li>
                <a href="#none">모델</a>
                <div className="sub_wrap">
                  <div className="sub_contents">
                    <ul className="sub">
                      <li className="sub_li">
                        <a href="#none">sub01</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items"></div>
                          </div>
                        </div>
                      </li>
                      <li className="sub_li">
                        <a href="#none">sub01</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items"></div>
                          </div>
                        </div>
                      </li>
                      <li className="sub_li">
                        <a href="#none">sub01</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items"></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#none">시승신청</a>
                <div className="sub_wrap">
                  <div className="sub_contents">
                    <ul className="sub">
                      <li className="sub_li">
                        <a href="#none">sub01</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items"></div>
                          </div>
                        </div>
                      </li>
                      <li className="sub_li">
                        <a href="#none">sub01</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items"></div>
                          </div>
                        </div>
                      </li>
                      <li className="sub_li">
                        <a href="#none">sub01</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items"></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#none">서비스</a>
                <div className="sub_wrap">
                  <div className="sub_contents">
                    <ul className="sub">
                      <li className="sub_li">
                        <a href="#none">sub01</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items"></div>
                          </div>
                        </div>
                      </li>
                      <li className="sub_li">
                        <a href="#none">sub01</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items"></div>
                          </div>
                        </div>
                      </li>
                      <li className="sub_li">
                        <a href="#none">sub01</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items"></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#none">볼보 역사</a>
                <div className="sub_wrap">
                  <div className="sub_contents">
                    <ul className="sub">
                      <li className="sub_li">
                        <a href="#none">sub04</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items">a</div>
                          </div>
                        </div>
                      </li>
                      <li className="sub_li">
                        <a href="#none">sub04</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items">a</div>
                          </div>
                        </div>
                      </li>
                      <li className="sub_li">
                        <a href="#none">sub04</a>
                        <div className="sub_conts_wrap">
                          <div className="sub_items_wrap">
                            <div className="sub_items">a</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}
            </ul>
            <div className="sub_wrap">
              <div className="sub_contents">
              {
                menuList.filter(item => menu === item.id).map(item => (
                  <div key = {item.id}>
                    {item.page}
                  </div>
                ))
              }
              </div>
            </div>
            <div className="search">
              <input type="search" placeholder="Search" />
              <button>X</button>
              <button>검색</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
