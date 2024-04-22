import { Link } from "react-router-dom";

export function Dashboard(){

    return (
        <div>
            <h1>Dashboard</h1>
            <Link to='/dashboard/profile'> Profile </Link>
            <br />
            <Link to='/dashboard/settings'> Settings </Link>
        </div>
    );
}