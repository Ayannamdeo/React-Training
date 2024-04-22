import { Link } from "react-router-dom";

export function Settings(){

    return (
        <div>
            <h1>Settings</h1>
            <Link to='/dashboard'>Go Back</Link>
        </div>
    );
}