import React, {useEffect} from 'react';
import $api from "../http";

const Profile = () => {

    useEffect(() => {
        console.log($api);
        $api.get('user/profile').then(response => {
            console.log(response);
        });
    }, []);

    return (
        <div>
            Сторінка профіля!!
        </div>
    );
};

export default Profile;