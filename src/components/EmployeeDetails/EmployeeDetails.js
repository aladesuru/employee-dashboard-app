import React from 'react';
import PropTypes from "prop-types";

//import components
import EmployeeName from '../EmployeeName';
import Slider from '../Slider';
import EmployeeProfileImage from '../ProfileImage';

const EmployeeDetails = ({selectedEmp}) => {
    return(
        <div className="emp-details-container"> 
            <div className="emp-details">
                <div className="emp-image">
                    <EmployeeProfileImage profileImage={selectedEmp.image}/>
                </div>
                <div className="emp-other-details">
                   <div className="emp-name"> 
                    <EmployeeName fontSize='2em' name={selectedEmp.name} />
                   </div>
                   <div className="emp-popularity"><Slider sliderValue={selectedEmp.popularity}/></div>
                   <div className="emp-bio"> 
                        <p>
                        {selectedEmp.biography}
                        </p>
                        <p className="emp-associate">
                        <strong>
                            Colleagues: 
                        </strong>
                        {
                            selectedEmp.colleagues.map((colleague , index) => {
                               return <span key={index}> {colleague } , </span>
                            })
                        }
                        </p>
                   </div>
                </div>
            </div>
        </div>
    )
}
EmployeeDetails.propTypes ={
    // name: PropTypes.string.isRequired,
}
export default EmployeeDetails;