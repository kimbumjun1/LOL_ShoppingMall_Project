import React, { useCallback, useEffect, useState } from 'react'
import { Icon, Carousel } from 'antd';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';
import useHover from '../../../hooks/useHover';
import './Sections/LandingPage.css';
import { Link } from 'react-router-dom';
import {Button} from "semantic-ui-react";
import HarryPoster from "./PosterImages/harryPoster.svg";
import lolProducts from "./PosterImages/lolPostersvg.svg";
import grootPoster from "./PosterImages/grootPoster.svg";
import friendsPoster from "./PosterImages/friendsPoster.svg";
import frozenPoster from "./PosterImages/frozenPoster.svg";
import jazzPoster from "./PosterImages/jazzPoster.svg";

function LandingPage() {

    {/* slider-bar - Carousel에 사용 - HEEJEONG*/ }
    const contentStyle = { 
        height: '320px',
        width: '100%'
      };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true, // 선택하면 해당 아이템이 가운데로
        
        responseive: [ //반응형 구현 옵션
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }            
        ]
    };

    const sliderStyle = {
        width:"85%", 
        // height:"500px", 
        borderRadius:"15px", 
        //boxShadow:"20px 20px 15px 2px rgb(199, 198, 198)",
        margin: "0 auto", // 슬라이더 내부 요소들 가운데 배치
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
        // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    };
    const hoveredSliderStyle = {
        width:"85%", 
        height:"500px", 
        //borderRadius:"20px", 
        //boxShadow:"20px 20px 15px 2px rgb(199, 198, 198)",
        margin: "0 auto", // 슬라이더 내부 요소들 가운데 배치
        opacity: "0.5"
    }

    const Wrap = styled.div`
        margin: 0 auto;
        margin-bottom: 10%;
        width: 85%;
        
        .slick-slide {
            margin: 1% auto;
        }
        .slick-list {
            margin: 0 5px;
        }
        
        .slick-prev:before {
            font-size: 45px;
            opacity: 0.3;
            color: grey;
            left: 0;
        }
        .slick-next:before {
            font-size: 45px;
            opacity: 0.3;
            color: grey;
        }
    `;

    const [btnHide, setBtnHide] = useState(true);
    const [ref, hover] = useHover();
 

    useEffect(() => {
        // setImgHovered 한번만 일어나도록
        
    }, [])

    const isHovering = () => {
        console.log('hover 성공')
    }

    const handleClick = () => {
        console.log('click 확인');
    }

    // <div 
    // style={{width:'60px', height:'60px', backgroundColor: 'Gold', borderRadius:'50%', display:'grid', placeContent:'center'}}>
    //     <img style={{width:'40px', height:'40px'}} src='images/lego-login.png' />
    // </div>
    // <img style={{height: '70px'}} src='images/lego-font.png' />

    const [active, setActive] = useState(false); /** 하트 좋아요에 이용 */
    const handleChangeActive = () => {
        setActive((previousHeart) => {
            return !previousHeart;
        });
    };

    return (
        <div style={{ width: '100%', margin: '0 auto', paddingTop:'8em' }} >
            <div style={{ textAlign: 'center' }} >
                <h1 style={{fontSize: '48px', fontWeight:'bold'}}>LOL.좋아하는 LEGO 제품을 <br/>
                구입하는 가장 좋은 방법.</h1>
                <h2><Link to="/totalproduct">전체 레고 보러가기</Link></h2>

            </div>

            {/*Slider-bar-Carousel  - HEEJEONG*/}
            <Wrap >
            <Slider {...settings} >
                <div className='slider_item'  >
                    <div >
                    <Link to="/product/62de3745d4e3de45e09be96e"><img 
                    style={sliderStyle} 
                    src={HarryPoster} /></Link>
                    </div>
                    
                </div>
                <div className='slider_item' >
                    <div >
                    <Link to="/product/62de3ac11758c20f78062091"><img 
                    style={sliderStyle} 
                    src={lolProducts} /></Link>
                    </div>
                    
                </div>
                <div className='slider_item'>
                    <div >
                    <Link to="/product/62de391ad4e3de45e09be978"><img 
                    style={sliderStyle} 
                    src={frozenPoster} /></Link>
                    </div>

                </div>
                <div className='slider_item'>
                    <div >
                    <Link to="/product/62de3a5f1758c20f78062089"><img 
                    style={sliderStyle} 
                    src={jazzPoster} /></Link>
                    </div>
                    
                </div>
                <div className='slider_item' >
                    <div >
                    <Link to="/product/62de3691d4e3de45e09be962"><img 
                    style={sliderStyle} 
                    src={grootPoster} /></Link>
                    </div>

                </div>
                <div className='slider_item' >
                    <div >
                    <Link to="/product/62de3a8c1758c20f7806208d"><img 
                    style={sliderStyle} 
                    src={friendsPoster} /></Link>
                    </div>

                </div>
            </Slider>
            </Wrap>
            

            {/* <Carousel autoplay >
                <div >
                    <h3 style={{textAlign:'center'}}>1
                    <img style={contentStyle} src='images/Lego-banner2.JPG' />
                    </h3>
                </div>
                <div >
                    <h3 style={{textAlign:'center'}}>2
                    <img style={contentStyle} src='images/Lego-banner3.JPG' /></h3>
                </div>
                <div >
                    <h3 style={{textAlign:'center'}}>3
                    <img style={contentStyle} src='images/Lego-banner1.JPG' /></h3>
                </div>
                
            </Carousel> */}

            

        </div>
    )
}

export default LandingPage;