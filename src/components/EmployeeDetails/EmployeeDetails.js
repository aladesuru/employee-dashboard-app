import React from 'react';

//import components
import EmployeeName from '../EmployeeName';
import Slider from '../Slider';
import EmployeeProfileImage from '../ProfileImage';

const EmployeeDetails = () => {
    return(
        <div className="emp-details-container"> 
            <div className="emp-details">
                <div className="emp-image">
                    <EmployeeProfileImage />
                </div>
                <div className="emp-other-details">
                   <div className="emp-name"> 
                    <EmployeeName fontSize='2em' name='Adebola Aladesuru' />
                   </div>
                   <div className="emp-popularity"><Slider /></div>
                   <div className="emp-bio"> 
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also 
                        leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets 
                        containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem 
                        Ipsum.
                        </p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails;