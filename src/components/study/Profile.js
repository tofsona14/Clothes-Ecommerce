import React, { useState } from 'react';


function Profile() {
    const [showProfile, setShowProfile] = useState(false)
    return (
        <>
            <h1>Profile</h1>
            <h2> Username: </h2>
        </>
    );
}

export default Profile;