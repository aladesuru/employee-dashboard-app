import React , {Component} from 'react';
import logo from '../../images/logo.svg'

// import components
import Logo from '../Logo';
import Employee from '../EmployeeName';



const SideBar = ({employee , selectEmp}) => {
    // console.log(selectEmp)
    const handleClick = (e) => {
        if(e.target.tagName.toLowerCase() === 'span'){
            console.log(e.target.textContent)
            selectEmp(e.target.textContent);
        }  
    }

    return(
        <div className="side-bar-container">
            <input type='checkbox' id="menu" />
            <label htmlFor="menu" className="menu">Menu</label>
            <div className='side-bar'>
                <label htmlFor="menu" className="menu">Menu</label>
                {/* <div className='logo'>
                <Logo />
                </div> */}
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
export default SideBar;