import React from 'react';
import image1 from '../../images/profile-pics/vito-corleone.jpg';
import image2 from '../../images/profile-pics/carmelia-corleone.jpg';
import image3 from '../../images/profile-pics/carlo-rizzi.jpg';
import image4 from '../../images/profile-pics/luci-mancini.jpg';

const images = [image1 , image2 , image3, image4 ];
const ProfileImage = () => {
    return(
        <div className="profile-image">
           <img src={images[0]} alt='profile'/>
        </div>
    )
}

export default ProfileImage;