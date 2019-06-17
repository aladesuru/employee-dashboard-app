import React from 'react';
import PropTypes from "prop-types";

// import components
import Logo from '../Logo';
import Employee from '../EmployeeName';

const SideBar = ({employee , selectEmp}) => {
    let side = React.createRef();
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
            <div className='side-bar' ref={side}>
                <label htmlFor="menu" className="menu">Menu</label>
                <div className='logo'>
                    <Logo />
                </div>
                <div className="list-of-employee">
                    <ul onClick={handleClick}>
                    {
                        //font size to reflect the popularity
                        employee.map((emp , index) => {
                            let fontSize = 0;
                            if(emp.popularity < 5){
                                fontSize = '1.1em'
                            }else{
                                fontSize ='1.5em'
                            }
                            return(
                               <li key={index}>
                                <label htmlFor="menu" className="emp-list">
                                    <Employee size={fontSize} name={emp.name} id={index}/>
                                </label>
                               </li> 
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