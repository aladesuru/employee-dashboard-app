import React from 'react';

const EmployeeName = ({size , name , id}) => {
    return(
        <div className="employee-conatainer">
            <span className="text-shadow" style={{fontSize: size}} id={id}>
                {  name }
            </span>
        </div>
        
    )
}
export default EmployeeName;