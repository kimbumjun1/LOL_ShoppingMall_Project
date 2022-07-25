/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Navbar.css';
import LoginLego from '../../../../images/lego-login.png';

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login"><span className='menubar-name'>로그인</span></a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register"><span className='menubar-name'>회원가입</span></a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="history">
          <a href="/history"><span className='menubar-name'>히스토리</span></a>
        </Menu.Item>

        <Menu.Item key="upload">
          <a href="/product/upload"><span className='menubar-name'>업로드</span></a>
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingBottom:'9px'}}> {/* style={{ paddingBottom: 3 }} */}
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" className="head-example"  > {/* style={{ marginRight: -22, color: '#667777' }} */}
              <span className='menubar-name-cart'>장바구니</span>
              {/* <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3, color:'black'}} /> */}
            </a>
          </Badge>
        </Menu.Item>

        <Menu.Item key="logout">
          <a style={{display:'flex', flexDirection:'row'}} onClick={logoutHandler}>
            <div 
            style={{marginRight: '0.25rem', width:'45px', height:'45px', backgroundColor: 'Gold', borderRadius:'50%', display:'grid', placeContent:'center'}}>
                <img style={{ width:'25px', height:'25px'}} src={LoginLego} />
            </div>
            <span className='menubar-name'>로그아웃</span>
          </a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

