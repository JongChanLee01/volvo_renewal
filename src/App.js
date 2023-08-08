import React, {useState} from 'react';
import Mainslider from './component/Mainslider';
import Model from './component/Model';
import Content from './component/Content';
import Nav from './component/Nav';

import './App.css';

// font-awesome cdn
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";


function App() {
  const [ Modal_isOpen, setModal_isOpen ] = useState(true);

  function TextPopup() {
    return(
      <>
        <div className='Text_popup_wrap'>
          <div className="main-modal">
            <p>
              안녕하십니까.<br/>
              공백기동안 잊어버린 것들을 되새김 하기위해서 리액트 기반으로 퍼블리싱을 해보았습니다.<br/>
              되새김을 하기 위한것이므로 디자인적인 부분은 배제하였습니다.<br/>
              <br/>
              구글링을 하면서 하였습니다.<br/>
              <br/>
              1. Nav는 map함수와 삼항연산자를 이용하여 만들어보았습니다.<br/>
                - 모델 쪽 부분에서 Electric, Plug-in hybrids, Mild hybrids에 마우스를 가져대 대면
                  자동차 모델이 바뀌게 하였습니다.<br/><br/>
              2. 슬라이드는 slick-slide플러그인을 이용하여 하였습니다.<br/><br/>
              3. Volvo Electric 쪽 컨텐츠에 버튼이 하나 있는데 버튼을 누르면 자세히보기 팝업창을 띄우도록 하였습니다.<br/>
                - 이 팝업창에서는 스크롤이 동작하도록 하였습니다.<br/><br/>
              4. 탭버튼도 삼항연산자를 이용하여 만들어보았습니다.<br/>
            </p>

            <button onClick={()=> { return(Modal_isOpen === true ? setModal_isOpen(false) : null)}}>닫기</button>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="App">
      {/* <TextPopup/> */}
      { Modal_isOpen == true} 
      { Modal_isOpen === true ? <TextPopup/> : null }
      <div className="wrap">
        <header className="App-header">
            <Nav/>
        </header>

        <main>
          <div className="main_wrap">
            <div className="main_slide">
              <Mainslider />
            </div>
            <div className="model_slide">
              <Model />
            </div>
            <div className="content">
              <Content />
            </div>
          </div>
        </main>

        <footer>
          <div className="footer_wrap">
            <img src="https://jongchanlee01.github.io/volvo_renewal/image/main_image/volvo_logo_reverse.png" alt="로고"></img>
            <div className="footer_gnb_wrap">
              <ul className="footer_gnb">
                <li><a href="#" rel="noopener noreferrer">쿠키</a></li>
                <li><a href="#" rel="noopener noreferrer">개인정보처리방침</a></li>
                <li><a href="#" rel="noopener noreferrer">법적고지</a></li>
                <li><a href="#" rel="noopener noreferrer">이용약관</a></li>
                <li><a href="#" rel="noopener noreferrer">채용</a></li>
              </ul>
            </div>
            <div className="social_media">
              <ul>
                <li><a href="https://www.facebook.com/volvocars/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                <li><a href="https://www.instagram.com/volvocars/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
                <li><a href="https://twitter.com/volvocars" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareTwitter} /></a></li>
                <li><a href="https://www.youtube.com/user/VolvoCarsNews" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
