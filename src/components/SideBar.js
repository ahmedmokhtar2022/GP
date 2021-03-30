// import component 
import React from 'react'
import Drawer from 'react-modern-drawer'
import { NavLink } from 'react-router-dom';
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import '../css/sideBar.css';
/* ------ Icons 👇---- */
import {TiThMenu} from 'react-icons/ti';
import {FaBook} from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { AiOutlineShop } from 'react-icons/ai';


const SideBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const stylelinkk ={ background: '#343434', color: 'inherit', textDecoration: 'inherit'};

    return (
        <>

            < TiThMenu class="bar_icon" onClick={toggleDrawer }/>
            <Drawer style={stylelinkk} open={isOpen} onClose={toggleDrawer} direction='left'>
                <ul class="side_bar_nav">
                <NavLink  exact  style={stylelinkk} to='/' activeClassName="active">
                     <li class="side_bar_table_li">< AiOutlineHome class="home_icon_side"/>Home</li>
                </NavLink>
                <NavLink  exact  style={stylelinkk} to='/Statistics' activeClassName="active">
                     <li class="side_bar_table_li">Statistics<BsGraphUp class="statistics_icon_side"/></li>
                </NavLink>
                 <NavLink  exact  style={stylelinkk} to='/Products' activeClassName="active">
                     <li class="side_bar_table_li">Products<AiOutlineShop class="shoping_icon_side"/></li>
                 </NavLink>
                 <NavLink  exact  style={stylelinkk} to='/Saved' activeClassName="active">
                     <li class="side_bar_table_li">Saved<AiOutlineShop class="shoping_icon_side"/></li>
                 </NavLink>
                 <NavLink  exact  style={stylelinkk} to='/About' activeClassName="active">
                     <li class="side_bar_table_li">About<FaBook class="about_icon_side"/></li>
                 </NavLink>
                 <NavLink  exact  style={stylelinkk} to='/Log Out' activeClassName="active">
                     <li class="side_bar_table_li" id="log_out">Log Out</li>
                 </NavLink>
                </ul>
            </Drawer>
            
        </>
    )
}

export default SideBar;