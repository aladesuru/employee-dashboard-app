import React from 'react';
import logo from '../../images/logo.svg'

// import components
import Logo from '../Logo';


const SideBar = () => {
    return(
        <div className='side-bar'>
            <Logo />
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default SideBar;