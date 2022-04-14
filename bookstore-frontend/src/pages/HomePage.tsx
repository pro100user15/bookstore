import {FC} from 'react';
import {Link} from "react-router-dom";

const HomePage: FC = () => {

    return (
        <main>
            Hello, it`s a Home page!
            <Link to={'/login'}>Login</Link>
        </main>
    );
}

export default HomePage;