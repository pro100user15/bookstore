import {FC, useEffect, useState} from 'react';
import $api from "../http";
import {User} from "../models/User";
import TextField from "@mui/material/TextField";
import {Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Profile: FC = () => {

    const [user, setUser] = useState<User>({} as User);

    const navigate = useNavigate();

    useEffect(() => {
        $api.get('/user/profile').then(response => {
            console.log(response);
            const data = response.data;
            setUser({...data, password: ''});
        });
    }, []);

    return (
        <Container maxWidth="xl" sx={{marginTop: "64px", paddingTop: "10px"}}>
            <table>
                <caption>My profile</caption>
                <tbody>
                {
                    user.name &&
                    <tr>
                        <td>Name :</td>
                        <td>{user.name}</td>
                    </tr>
                }
                {
                    user.surname &&
                    <tr>
                        <td>Surname :</td>
                        <td>{user.surname}</td>
                    </tr>
                }
                <tr>
                    <td>Email :</td>
                    <td>{user.email}</td>
                </tr>
                {
                    user.phone &&
                    <tr>
                        <td>Phone :</td>
                        <td>{user.phone}</td>
                    </tr>
                }
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
            <Button variant="contained" color="success" onClick={e => navigate('/profile-edit')}>
                Edit User
            </Button>
        </Container>
    );
};

export default Profile;