import React, {useState} from 'react';
import AuthorizationService from "../services/AuthorizationService";
import TextField from "@mui/material/TextField";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {User, UserLogin} from "../models/User";
import {useNavigate} from "react-router-dom";

const RegistrationForms = () => {
    const [user, setUser] = useState<UserLogin>({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent) => {
        console.log(user);
        AuthorizationService.register(user)
            /*.then(response => {
                console.log(response.data);
            })*/;
        navigate('/login');
        setUser({
            email: '',
            password: ''
        });
    };

    return (
        <div style={{margin: "50px 0 0 800px"}}>
            <h1>Registration</h1>
            <form noValidate autoComplete="off">
                {/*<div>
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
                </div>*/}
                <div>
                    <TextField id="standard-basic"
                               label="Email"
                               variant="standard"
                               value={user.email}
                               onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>
                {/*<div>
                    <TextField id="standard-basic"
                               label="Phone"
                               variant="standard"
                               value={user.phone}
                               onChange={(e) => setUser({...user, phone: e.target.value})}
                    />
                </div>
                <div>
                    <FormControl variant="standard" sx={{minWidth: 120}}>
                        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={user.sex}
                            onChange={(e) => setUser({...user, sex: e.target.value})}
                            label="Age"
                        >
                            <MenuItem value={'NO'}>None</MenuItem>
                            <MenuItem value={'MALE'}>Male</MenuItem>
                            <MenuItem value={'FEMALE'}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </div>*/}
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
                        Registration
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForms;