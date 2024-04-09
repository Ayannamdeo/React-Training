import { Outlet } from "react-router-dom";

export function Products(){
    return (
        <div>
            <h1>List of Products: </h1>
            <Outlet />
        </div>
    );
}