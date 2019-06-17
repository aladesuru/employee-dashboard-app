import React from 'react';
import PropTypes from "prop-types";

//import image
import image1 from '../../images/profile-pics/vito-corleone.jpg';
import image2 from '../../images/profile-pics/carmelia-corleone.jpg';
import image3 from '../../images/profile-pics/carlo-rizzi.jpg';
import image4 from '../../images/profile-pics/luci-mancini.jpg';

const images = [image1 , image2 , image3, image4 ];
const ProfileImage = ({profileImageId}) => {
    return(
        <div className="profile-image">
           <img src={images[profileImageId]} alt='profile'/>
        </div>
    )
}
ProfileImage.propTypes = {
    profileImageId: PropTypes.number.isRequired
}
export default ProfileImage;