import React from 'react';
import '../css/App.css';
import post_user_img from '../images/ahmed.jpg';
import { NavLink } from 'react-router-dom';
import SideBar from './SideBar';
/* ------ Below is JUST Icons---- */
import { AiOutlineHome } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { AiOutlineShop } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import {RiArrowDropDownLine} from 'react-icons/ri';
/*---------------------*/


function Nav() {

const stylelink ={ color: 'inherit', textDecoration: 'inherit'};
    


  return (
    <nav class="navbar">
        <div class="slide_nav_icon"><SideBar/></div>
        <h3 class="logo">Co-Save {/* <img class="nav_logo" src={'#'}></img>*/}</h3>
        <ul class="navbar_ul">
            <NavLink  exact  style={stylelink} to='/' activeClassName="active">
                <li  class="navbar_li" activeClassName="active" id="home_li">< AiOutlineHome class="home_icon"/><span class="span_li_name">Home</span></li>
            </NavLink >
            <NavLink  style={stylelink} to='/Statistics'activeClassName="active">
                 <li class="navbar_li" activeClassName="active">Statistics<BsGraphUp class="statistics_icon"/></li>
            </NavLink >
            <NavLink  style={stylelink} to='/Products' activeClassName="active">
                 <li class="navbar_li" activeClassName="active">Products<AiOutlineShop class="shoping_icon"/></li>
            </NavLink >
            
                <li class="navbar_li_user">
                    <div class="nav_user_photo"><img class="img_nav" src={post_user_img}></img></div>
                    <div class="nav_username">Ahmed Mokhtar</div>
                    <div class="drop_down_nav_user"><RiArrowDropDownLine/></div>
                </li>

                <li class="navbar_li_notification">
                    <div class="notification"><IoMdNotificationsOutline class="notification_icon"/></div>
                </li>
                
          
        </ul>
    </nav>

  );
}

export default Nav;
