import React from 'react';

import url from '../../images/Profile pics/tom-hagen.jpg'

const ProfileImage = () => {
    return(
        <div className="profile-image">
            <img src={url} alt='profile'/>
        </div>
    )
}

export default ProfileImage;