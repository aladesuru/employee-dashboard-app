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
                    <EmployeeProfileImage profileImageId={selectedEmp.id}/>
                </div>
                <div className="emp-other-details">
                   <div className="emp-name"> 
                    <EmployeeName size='2em' name={selectedEmp.name} />
                   </div>
                   <div className="emp-popularity"><Slider sliderValue={selectedEmp.popularity}/></div>
                   <div className="emp-bio"> 
                        <h3>Biography</h3>
                        <p>
                        {selectedEmp.biography}
                        </p>
                        <p className="emp-associate">
                        {
                            selectedEmp.colleagues.length > 1  ? <strong>Colleagues</strong> : ' '
                        }

                        {
                            selectedEmp.colleagues.length > 0 
                            ?
                            selectedEmp.colleagues.map((colleague , index) => {
                            return <span key={index}> &nbsp;{colleague } &nbsp;</span>
                            })
                            : 
                            ' '
                        }
                        </p>
                   </div>
                </div>
            </div>
        </div>
    )
}
EmployeeDetails.propTypes ={
    selectedEmp: PropTypes.object.isRequired,
}

export default EmployeeDetails;