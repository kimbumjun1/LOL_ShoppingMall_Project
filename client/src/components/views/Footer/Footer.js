import React from 'react'
import {Icon} from 'antd';
import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faCopyright} from "@fortawesome/free-regular-svg-icons";
import RedLogo from "./lego-logo-red2.png";

function Footer() {
    return (
        // backgroundColor:'rgba(255, 215, 0, 0.4)' flexDirection: 'column', alignItems: 'center',justifyContent: 'center',
            
        <div style={{
             fontSize:'1rem', backgroundColor:'Gold', color:'black', padding:'2rem 0'
        }}>
            <div style={{width: '80%', display: 'flex', flexDirection:'column',  margin:'0 auto' } }>
                <div >
                    <div>
                        
                        <div className='footer-logo' >
                            <img style={{width: '6rem', height:'6rem', marginBottom:'0.5rem'}} src={RedLogo} />
                            <div className='position-icon' style={{fontSize:'1rem', marginLeft:'0.5rem'}}>
                                <FontAwesomeIcon icon={faLocationDot} /> 7F, 14, Teheran-ro, 26-gil, Gangnam-gu, Seoul 06236 
                                <br></br>
                                Tel. 010-4050-9976  
                            </div>
                        </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                        
                        <div className='people-info' style={{display:'flex'}}>
                            <div className='person' style={{marginRight:'1em'}}>
                                <span>김범준</span>
                            </div>
                            <div className='person' style={{margin:'0 1em'}}>
                                <span>김 진</span>
                            </div>
                            <div className='person' style={{margin:'0 1em'}}>
                                <span>장희정</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <p style={{color:'black', opacity:'0.8'}}>Copyright 2022 KIM & JANG All Rights Reserved</p>
                </div>

            </div>
            


        </div>
    )
}

export default Footer
