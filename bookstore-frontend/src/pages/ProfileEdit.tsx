import React, {FC, useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {User} from "../models/User";
import $api from "../http";
import AuthorizationService from "../services/AuthorizationService";
import {useNavigate} from "react-router-dom";

const ProfileEdit: FC = () => {

    const [user, setUser] = useState<User>({} as User);

    const navigate = useNavigate();

    useEffect(() => {
        $api.get('/user/profile').then(response => {
            console.log(response);
            const data = response.data;
            setUser({...data, password: ''});
        });
    }, []);

    const handleClick = (e: React.MouseEvent) => {
        console.log(user);
        $api.put('/user/profile', user).then(response => {
            console.log(response);
            navigate('/profile');
            setUser({} as User);
        });
    };

    return (
        <div>
            <h1>Edit User</h1>
            <form noValidate autoComplete="off">
                <div>
                    <TextField id="standard-basic"
                               label="Name"
                               variant="standard"
                               value={user.name}
                               onChange={(e) => setUser({...user, name: e.target.value})}
                    />
                </div>
                <div>
                    <TextField id="standard-basic"
                               label="Surname"
                               variant="standard"
                               value={user.surname}
                               onChange={(e) => setUser({...user, surname: e.target.value})}
                    />
                </div>
                <div>
                    <TextField id="standard-basic"
                               label="Email"
                               variant="standard"
                               value={user.email}
                               onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div>
                    <TextField id="standard-basic"
                               label="Phone"
                               variant="standard"
                               value={user.phone}
                               onChange={(e) => setUser({...user, phone: e.target.value})}
                    />
                </div>
                <div>
                    <FormControl variant="standard" sx={{minWidth: 120}}>
                        <InputLabel id="demo-simple-select-standard-label">Sex</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={user.sex}
                            onChange={(e) => setUser({...user, sex: e.target.value})}
                            label="Sex"
                        >
                            <MenuItem value={'NO'}>None</MenuItem>
                            <MenuItem value={'MALE'}>Male</MenuItem>
                            <MenuItem value={'FEMALE'}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <TextField id="outlined-password-input"
                               label="Password"
                               type="password"
                               autoComplete="current-password"
                               variant="standard"
                               value={user.password}
                               onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>
                <div>
                    <TextField id="outlined-password-input"
                               label="Password"
                               type="password"
                               autoComplete="current-password"
                               variant="standard"
                               value={user.password}
                               onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>
                <div>
                    <TextField id="outlined-password-input"
                               label="Password"
                               type="password"
                               autoComplete="current-password"
                               variant="standard"
                               value={user.password}
                               onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>
                <div>
                    <Button variant="contained" color="success" onClick={handleClick}>
                        Edit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEdit;