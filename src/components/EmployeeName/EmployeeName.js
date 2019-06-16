import React from 'react';

const EmployeeName = ({fontSize , name}) => {
    return(
        <div>
        <p className='emp-name' style={{fontSize: fontSize}}>
            {  name }
        </p>
        </div>
        
    )
}
export default EmployeeName;