import { Link } from "react-router-dom";

export function Profile(){
    return (
        <div>
            <h1>Profile</h1>
            <Link to='/dashboard'>Go Back</Link>
        </div>
    );
}