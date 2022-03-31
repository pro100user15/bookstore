import {FC} from 'react';
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
    return (
        <div>
            This page doesn`t exist. Go to <Link to={'/'}>home</Link>.
        </div>
    );
}

export default NotFoundPage;