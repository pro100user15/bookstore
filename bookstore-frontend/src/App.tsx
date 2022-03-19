import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import {getCurrentUser, login} from "./services/AuthorizationService";
import {Role} from "./models/Authority";
import {UserAuthorization, UserLogin} from "./models/User";
import HomePage from "./pages/HomePage";
import RegistrationForm from "./components/RegistrationForm";
import Category from "./components/Categories/Category/Category";
import CategoryDetails from "./components/Categories/CategoryDetails/CategoryDetails";
import NotFoundPage from "./pages/NotFoundPage";
import LoginForm from "./components/LoginForm";
import Profile from "./pages/Profile";

function App() {
    const [user, setUser] = useState<UserAuthorization | null>();
    const [authorities, setAuthorities] = useState<Role[]>([]);

    useEffect(() => {
        getCurrentUser().then(response => {
            setUser(response);
            if (response !== null) {
                setAuthorities(response.roles);
            }
        });
    }, []);

    return (
        <BrowserRouter>
            <Header authorities={authorities}/>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/login' element={<LoginForm />}/>
                <Route path='/registration' element={<RegistrationForm />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/categories' element={<Category />}/>
                <Route path='/categories/:id' element={<CategoryDetails />}/>
                <Route path='*' element={<NotFoundPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
