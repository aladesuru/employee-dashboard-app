import React from 'react';
import PropTypes from "prop-types";

// import components
import Logo from '../Logo';
import Employee from '../EmployeeName';

const SideBar = ({employee , selectEmp}) => {
    //handle click when name of an employee is click
    const handleClick = (e) => {
        if(e.target.tagName.toLowerCase() === 'span'){
            selectEmp(e.target.textContent);
        }  
    }

    return(
        <div className="side-bar-container">
            <input type='checkbox' id="menu" />
            <label htmlFor="menu" className="menu">Menu</label>
            <div className='side-bar'>
                <label htmlFor="menu" className="menu">Menu</label>
                <div className='logo'>
                <Logo />
                </div>
                <div className="list-of-employee">
                    <ul onClick={handleClick} >
                    {
                        employee.map((emp , index) => {
                            let fontSize = 0;
                            if(emp.popularity < 5){
                                fontSize = '1.1em'
                            }else{
                                fontSize ='1.5em'
                            }
                            return(
                               <li key={index}><Employee size={fontSize} name={emp.name} id={index}/></li> 
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

SideBar.propTypes = {
    employee: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectEmp: PropTypes.func.isRequired
}
export default SideBar;