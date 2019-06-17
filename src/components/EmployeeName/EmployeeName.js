import React from 'react';
import PropTypes from "prop-types";

const EmployeeName = ({size , name , id}) => {
    return(
        <div className="employee-conatainer">
            <span className="text-shadow" style={{fontSize: size}} id={id}>
                {  name }
            </span>
        </div>
        
    )
}
EmployeeName.propTypes = {
    size: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number
}

export default EmployeeName;