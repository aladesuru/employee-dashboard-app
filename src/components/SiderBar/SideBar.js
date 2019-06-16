import React from 'react';
import logo from '../../images/logo.svg'

// import components
import Logo from '../Logo';


const SideBar = () => {
    return(
        <div className='side-bar'>
            <div className='logo'>
             <Logo />
            </div>
        </div>
    )
}

export default SideBar;