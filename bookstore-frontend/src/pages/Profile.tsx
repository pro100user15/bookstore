import React, {useEffect, useState} from 'react';
import $api from "../http";
import {User} from "../models/User";

const Profile = () => {

    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        $api.get('/user/profile').then(response => {
            console.log(response);
            setUser(response.data);
        });
    }, []);

    return (
        <div>
            <table>
                <caption>My profile</caption>
                <tbody>
                <tr>
                    <td>Name :</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Surname :</td>
                    <td>{user.surname}</td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>Phone :</td>
                    <td>{user.phone}</td>
                </tr>
                <tr>
                    <td>Sex :</td>
                    {
                        user.sex === 'NO' &&
                        <td>No</td>
                    }
                    {
                        user.sex === 'MALE' &&
                        <td>Male</td>
                    }
                    {
                        user.sex === 'FEMALE' &&
                        <td>Female</td>
                    }
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Profile;