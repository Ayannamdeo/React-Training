import { Link } from "react-router-dom";

export function Dashboard(){

    return (
        <div>
            <h1>Dashboard</h1>
            <Link to='/Dashboard/Profile'> Profile </Link>
            <br />
            <Link to='/Dashboard/Settings'> Settings </Link>
        </div>
    );
}